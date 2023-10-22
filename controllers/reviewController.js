const Review = require("../models/reviewModel");
const asyncHandler = require("express-async-handler");

// create review
const createReview = asyncHandler(async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(200).json(review);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all reviews
const getAllReviews = asyncHandler(async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve review by storeID
const getReview = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.find({ StoreID: id });
    res.status(200).json(review);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update review by ID
const updateReview = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!review) {
      res.status(404);
      throw new Error(`cannot find any review with id: ${id}`);
    }
    res.status(201).json(review);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete review by ID
const deleteReview = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findOneAndDelete({ _id: id }, req.body, {
      new: true,
    });
    if (!review) {
      res.status(404);
      throw new Error(`cannot find any review with id: ${id}`);
    }
    res.status(201).json(review);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
};
