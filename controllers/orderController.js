const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");

// create order
const createOrder = asyncHandler(async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all orders
const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve order by ID
const getOrder = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.find({ _id: id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update order by ID
const updateOrder = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!order) {
      res.status(404);
      throw new Error(`cannot find any order with id: ${id}`);
    }
    res.status(201).json(order);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete order by ID
const deleteOrder = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOneAndDelete({ _id: id }, req.body, {
      new: true,
    });
    if (!order) {
      res.status(404);
      throw new Error(`cannot find any order with id: ${id}`);
    }
    res.status(201).json(order);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};
