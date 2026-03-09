const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isReviewAuthor } = require("../middleware");
const profileController = require("../controllers/profile");
const Review = require("../models/review");
const Listing = require("../models/listing");

router.get("/profile", isLoggedIn, wrapAsync(profileController.showProfile));

// route for deleting reviews from profile
router.delete(
  "/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    const { reviewId } = req.params;

    // Find the review to get the listing ID
    const review = await Review.findById(reviewId);
    if (!review) {
      req.flash("error", "Review not found");
      return res.redirect("/profile");
    }

    // Delete the review
    await Review.findByIdAndDelete(reviewId);

    // Remove review reference from listing
    await Listing.findByIdAndUpdate(review.listing, {
      $pull: { reviews: reviewId },
    });

    req.flash("success", "Review deleted successfully!");
    res.redirect("/profile");
  }),
);

module.exports = router;
