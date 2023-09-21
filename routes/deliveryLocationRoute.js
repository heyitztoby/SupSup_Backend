const express = require("express");

const router = express.Router();

const {
  createDeliveryLocation,
  getAllDeliveryLocations,
  getDeliveryLocation,
  updateDeliveryLocation,
  deleteDeliveryLocation,
} = require("../controllers/deliveryLocationController");

// create deliveryLocation
router.post("/create", createDeliveryLocation);

// retrieve all deliveryLocations
router.get("/getAll", getAllDeliveryLocations);

// retrieve deliveryLocation by DeliveryLocationID
router.get("/get/:id", getDeliveryLocation);

// update deliveryLocation by DeliveryLocationID
router.put("/update/:id", updateDeliveryLocation);

// delete deliveryLocation by DeliveryLocationID
router.delete("/delete/:id", deleteDeliveryLocation);

module.exports = router;
