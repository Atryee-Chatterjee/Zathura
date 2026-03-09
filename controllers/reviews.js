const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
  try {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    newReview.listing = listing._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect(`/listings/${req.params.id}`);
  }
};

module.exports.destroyReview = async (req, res) => {
  try {
    let { id, reviewId } = req.params;

    // Find and delete the review
    await Review.findByIdAndDelete(reviewId);

    // Remove review reference from listing
    await Listing.findByIdAndUpdate(id, {
      $pull: { reviews: reviewId },
    });

    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("back");
  }
};
