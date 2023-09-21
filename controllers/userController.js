const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// create user
const createUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all users
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve user by ID
const getUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.find({ _id: id });
    res.status(200).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update user by ID
const updateUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!users) {
      res.status(404);
      throw new Error(`cannot find any user with id: ${id}`);
    }
    res.status(201).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete user by ID
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findOneAndDelete({ _id: id }, req.body, {
      new: true,
    });
    if (!users) {
      res.status(404);
      throw new Error(`cannot find any user with id: ${id}`);
    }
    res.status(201).json(users);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
