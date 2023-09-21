const express = require("express");

const router = express.Router();

const {
  createFood,
  getAllFoods,
  getFood,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

// create food
router.post("/create", createFood);

// retrieve all foods
router.get("/getAll", getAllFoods);

// retrieve food by ID
router.get("/get/:id", getFood);

// update food by ID
router.put("/update/:id", updateFood);

// delete food by ID
router.delete("/delete/:id", deleteFood);

module.exports = router;
