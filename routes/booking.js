const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");
const bookingController = require("../controllers/bookings");

// Trips page
router.get("/trips", isLoggedIn, wrapAsync(bookingController.getTrips));

// Past trips page
router.get(
  "/trips/past",
  isLoggedIn,
  wrapAsync(bookingController.getPastTrips),
);

// Create booking
router.post(
  "/listings/:id/bookings",
  isLoggedIn,
  wrapAsync(bookingController.createBooking),
);

// Cancel booking
router.post(
  "/bookings/:bookingId/cancel",
  isLoggedIn,
  wrapAsync(bookingController.cancelBooking),
);

// Booking details
router.get(
  "/bookings/:bookingId",
  isLoggedIn,
  wrapAsync(bookingController.getBookingDetails),
);

module.exports = router;
