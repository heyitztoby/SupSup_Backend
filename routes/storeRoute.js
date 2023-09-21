const express = require("express");

const router = express.Router();

const {
  createStore,
  getAllStores,
  getStore,
  updateStore,
  deleteStore,
} = require("../controllers/storeController");

// create store
router.post("/create", createStore);

// retrieve all stores
router.get("/getAll", getAllStores);

// retrieve store by storeID
router.get("/get/:id", getStore);

// update store by storeID
router.put("/update/:id", updateStore);

// delete store by storeID
router.delete("/delete/:id", deleteStore);

module.exports = router;
