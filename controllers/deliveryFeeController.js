const DeliveryFee = require("../models/deliveryFeeModel");
const asyncHandler = require("express-async-handler");

// create delivery fee
const createDeliveryFee = asyncHandler(async (req, res) => {
  try {
    const deliveryFee = await DeliveryFee.create(req.body);
    res.status(200).json(deliveryFee);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all delivery fees
const getAllDeliveryFees = asyncHandler(async (req, res) => {
  try {
    const deliveryFees = await DeliveryFee.find({});
    res.status(200).json(deliveryFees);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve delivery fee by distance
const getDeliveryFee = asyncHandler(async (req, res) => {
  try {
    const { distance } = req.params;
    const deliveryFee = await DeliveryFee.find({
      Distance: distance,
    });
    res.status(200).json(deliveryFee);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update delivery fee by distance
const updateDeliveryFee = asyncHandler(async (req, res) => {
  try {
    const { distance } = req.params;
    const deliveryFee = await DeliveryFee.findOneAndUpdate(
      { Distance: distance },
      req.body,
      {
        new: true,
      }
    );
    if (!deliveryFee) {
      res.status(404);
      throw new Error(
        `cannot find any delivery prices with distance: ${distance}`
      );
    }
    res.status(201).json(deliveryFee);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete delivery fee by distance
const deleteDeliveryFee = asyncHandler(async (req, res) => {
  try {
    const { distance } = req.params;
    const deliveryFee = await DeliveryFee.findOneAndDelete(
      { Distance: distance },
      req.body,
      {
        new: true,
      }
    );
    if (!deliveryFee) {
      res.status(404);
      throw new Error(
        `cannot find any delivery prices with distance: ${distance}`
      );
    }
    res.status(201).json(deliveryFee);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createDeliveryFee,
  getAllDeliveryFees,
  getDeliveryFee,
  updateDeliveryFee,
  deleteDeliveryFee,
};
