const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const wishlistController = require("../controllers/wishlists.js");

// Wishlist page
router.get("/wishlist", isLoggedIn, wrapAsync(wishlistController.getWishlist));

// Add to wishlist
router.post(
  "/wishlist/add/:id",
  isLoggedIn,
  wrapAsync(wishlistController.addToWishlist),
);

// Remove from wishlist
router.delete(
  "/wishlist/remove/:id",
  isLoggedIn,
  wrapAsync(wishlistController.removeFromWishlist),
);

// API endpoints for AJAX
router.post(
  "/api/wishlist/toggle/:id",
  isLoggedIn,
  wrapAsync(wishlistController.toggleWishlistAPI),
);
router.get(
  "/api/wishlist",
  isLoggedIn,
  wrapAsync(wishlistController.getWishlistAPI),
);

module.exports = router;
