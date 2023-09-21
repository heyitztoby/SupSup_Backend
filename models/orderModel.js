const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    StoreID: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter a store ID"],
    },
    Foods: {
      type: [mongoose.Schema.Types.ObjectId],
      required: [true, "Please enter a food"],
    },
    Total: {
      type: String,
      required: [true, "Please enter a total price"],
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("SupSupDB");
const Order = myDB.model("Order", orderSchema);

module.exports = Order;
