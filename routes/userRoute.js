const express = require("express");

const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// create user
router.post("/create", createUser);

// retrieve all users
router.get("/getAll", getAllUsers);

// retrieve user by userID
router.get("/get/:id", getUser);

// update user by userID
router.put("/update/:id", updateUser);

// delete user by userID
router.delete("/delete/:id", deleteUser);

module.exports = router;
