const Food = require("../models/foodModel");
const asyncHandler = require("express-async-handler");

// create food
const createFood = asyncHandler(async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(200).json(food);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all foods
const getAllFoods = asyncHandler(async (req, res) => {
  try {
    const foods = await Food.find({});
    res.status(200).json(foods);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all foods by storeID
const getFood = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.find({ StoreID: id });
    res.status(200).json(food);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update food by ID
const updateFood = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!food) {
      res.status(404);
      throw new Error(`cannot find any food with id: ${id}`);
    }
    res.status(201).json(food);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete food by ID
const deleteFood = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findOneAndDelete({ _id: id }, req.body, {
      new: true,
    });
    if (!food) {
      res.status(404);
      throw new Error(`cannot find any food with id: ${id}`);
    }
    res.status(201).json(food);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createFood,
  getAllFoods,
  getFood,
  updateFood,
  deleteFood,
};
