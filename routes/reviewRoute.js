const express = require("express");

const router = express.Router();

const {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

// create review
router.post("/create", createReview);

// retrieve all reviews
router.get("/getAll", getAllReviews);

// retrieve review by StoreID
router.get("/get/:id", getReview);

// update review by ID
router.put("/update/:id", updateReview);

// delete review by ID
router.delete("/delete/:id", deleteReview);

module.exports = router;
