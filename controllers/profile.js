const User = require("../models/user");
const Review = require("../models/review");

module.exports.showProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Get logged-in user's ID
    const user = await User.findById(userId);

    if (!user) {
      req.flash("error", "User not found");
      return res.redirect("/listings");
    }

    // Get user's reviews with basic listing data
    const userReviews = await Review.find({ author: userId })
      .populate("listing", "_id")
      .sort({ createdAt: -1 });

    res.render("users/profile", {
      profileUser: user,
      userReviews,
    });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("/listings");
  }
};
