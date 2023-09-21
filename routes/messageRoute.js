const express = require("express");

const router = express.Router();

const {
  createMessage,
  getAllMessages,
  getMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messageController");

// create message
router.post("/create", createMessage);

// retrieve all messages
router.get("/getAll", getAllMessages);

// retrieve message by MessageID
router.get("/get/:id", getMessage);

// update message by MessageID
router.put("/update/:id", updateMessage);

// delete message by MessageID
router.delete("/delete/:id", deleteMessage);

module.exports = router;
