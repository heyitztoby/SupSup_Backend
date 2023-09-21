const Store = require("../models/storeModel");
const asyncHandler = require("express-async-handler");

// create store
const createStore = asyncHandler(async (req, res) => {
  try {
    const store = await Store.create(req.body);
    res.status(200).json(store);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all stores
const getAllStores = asyncHandler(async (req, res) => {
  try {
    const stores = await Store.find({});
    res.status(200).json(stores);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve store by ID
const getStore = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const stores = await Store.find({ _id: id });
    res.status(200).json(stores);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update store by ID
const updateStore = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const stores = await Store.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!stores) {
      res.status(404);
      throw new Error(`cannot find any stalls with id: ${id}`);
    }
    res.status(201).json(stores);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete store by ID
const deleteStore = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const stores = await Store.findOneAndDelete({ _id: id }, req.body, {
      new: true,
    });
    if (!stores) {
      res.status(404);
      throw new Error(`cannot find any stalls with id: ${id}`);
    }
    res.status(201).json(stores);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createStore,
  getAllStores,
  getStore,
  updateStore,
  deleteStore,
};
