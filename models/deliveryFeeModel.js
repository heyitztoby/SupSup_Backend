const mongoose = require("mongoose");

const deliveryFeeSchema = mongoose.Schema(
  {
    Distance: {
      type: String,
      required: [true, "Please enter the delivery distance"],
    },
    Price: {
      type: Number,
      required: [true, "Please enter the delivery price"],
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("SupSupDB");
const DeliveryFee = myDB.model("DeliveryFee", deliveryFeeSchema);

module.exports = DeliveryFee;
