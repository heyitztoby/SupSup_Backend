const Message = require("../models/messageModel");
const asyncHandler = require("express-async-handler");

// create message
const createMessage = asyncHandler(async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(200).json(message);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve all messages
const getAllMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// retrieve message by ID
const getMessage = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.find({ _id: id });
    res.status(200).json(message);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// update message by ID
const updateMessage = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!message) {
      res.status(404);
      throw new Error(`cannot find any message with id: ${id}`);
    }
    res.status(201).json(message);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//delete message by ID
const deleteMessage = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findOneAndDelete({ _id: id }, req.body, {
      new: true,
    });
    if (!message) {
      res.status(404);
      throw new Error(`cannot find any message with id: ${id}`);
    }
    res.status(201).json(message);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createMessage,
  getAllMessages,
  getMessage,
  updateMessage,
  deleteMessage,
};
