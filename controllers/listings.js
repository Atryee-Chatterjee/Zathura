const { Query } = require("mongoose");
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// INDEX + SEARCH + CATEGORY FILTER
module.exports.index = async (req, res) => {
  const { location, category } = req.query;

  let filter = {};

  // Location search (case-insensitive)
  if (location && location.trim() !== "") {
    filter.location = { $regex: new RegExp(location, "i") };
  }

  // Category filter
  if (category && category.trim() !== "") {
    filter.category = category; // Exact match
  }

  // Get all listings with reviews populated for rating calculation
  const allListings = await Listing.find(filter).populate("reviews");

  // Calculate average rating and review count for each listing
  const listingsWithRating = allListings.map((listing) => {
    const listingObj = listing.toObject();

    if (listing.reviews && listing.reviews.length > 0) {
      const totalRating = listing.reviews.reduce(
        (sum, review) => sum + review.rating,
        0,
      );
      listingObj.avgRating = (totalRating / listing.reviews.length).toFixed(1);
      listingObj.reviewCount = listing.reviews.length;
    } else {
      listingObj.avgRating = null;
      listingObj.reviewCount = 0;
    }

    return listingObj;
  });

  res.render("listings/index", {
    allListings: listingsWithRating,
    searchQuery: location || "",
    selectedCategory: category || "",
  });
};

//NEW FORM
module.exports.renderNewForm = async (req, res) => {
  // console.log(req.user);
  res.render("listings/new.ejs");
};

//SHOW LISTING
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing You Requested For Does Not Exist!");
    return res.redirect("/listings");
  }
  // console.log(listing);
  res.render("listings/show.ejs", { listing });
};

//CREATE LISTING
module.exports.createListing = async (req, res) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;

  const listingData = req.body.listing;

  if (!listingData.image || listingData.image.trim() === "") {
    delete listingData.image; // This lets Mongoose use the default
  }
  const newListing = new Listing(listingData);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;

  let savedListing = await newListing.save();
  // console.log(savedListing);
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

//EDIT FORM
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing You Requested For Does Not Exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

//UPDATE LISTINGS
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };

    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

//DELETE LISTING
module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  // console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
