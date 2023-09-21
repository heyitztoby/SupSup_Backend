const DeliveryLocation = require("../models/deliveryLocationModel");
const asyncHandler = require("express-async-handler");

// create delivery location
const createDeliveryLocation = asyncHandler(async (req, res) => {
  try {
    const deliveryLocation = await DeliveryLocation.create(req.body);
    res.status(200).json(deliveryLocation);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all delivery locations
const getAllDeliveryLocations = asyncHandler(async (req, res) => {
  try {
    const deliveryLocations = await DeliveryLocation.find({});
    res.status(200).json(deliveryLocations);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve delivery location by ID
const getDeliveryLocation = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deliveryLocation = await DeliveryLocation.find({
      _id: id,
    });
    res.status(200).json(deliveryLocation);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update delivery location by ID
const updateDeliveryLocation = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deliveryLocation = await DeliveryLocation.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (!deliveryLocation) {
      res.status(404);
      throw new Error(`cannot find any stalls with id: ${id}`);
    }
    res.status(201).json(deliveryLocation);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete delivery location by ID
const deleteDeliveryLocation = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deliveryLocation = await DeliveryLocation.findOneAndDelete(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (!deliveryLocation) {
      res.status(404);
      throw new Error(`cannot find any stalls with id: ${id}`);
    }
    res.status(201).json(deliveryLocation);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createDeliveryLocation,
  getAllDeliveryLocations,
  getDeliveryLocation,
  updateDeliveryLocation,
  deleteDeliveryLocation,
};
