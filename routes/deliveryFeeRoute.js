const express = require("express");

const router = express.Router();

const {
  createDeliveryFee,
  getAllDeliveryFees,
  getDeliveryFee,
  updateDeliveryFee,
  deleteDeliveryFee,
} = require("../controllers/deliveryFeeController");

// create deliveryFee
router.post("/create", createDeliveryFee);

// retrieve all deliveryFees
router.get("/getAll", getAllDeliveryFees);

// retrieve deliveryFee by distance
router.get("/get/:distance", getDeliveryFee);

// update deliveryFee by distance
router.put("/update/:distance", updateDeliveryFee);

// delete deliveryFee by distance
router.delete("/delete/:distance", deleteDeliveryFee);

module.exports = router;
