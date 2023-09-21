const express = require("express");

const router = express.Router();

const {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

// create order
router.post("/create", createOrder);

// retrieve all orders
router.get("/getAll", getAllOrders);

// retrieve order by ID
router.get("/get/:id", getOrder);

// update order by ID
router.put("/update/:id", updateOrder);

// delete order by ID
router.delete("/delete/:id", deleteOrder);

module.exports = router;
