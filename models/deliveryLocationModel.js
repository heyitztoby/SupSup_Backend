const mongoose = require("mongoose");

const deliveryLocationSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Please enter a delivery location name"],
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("SupSupDB");
const DeliveryLocation = myDB.model("DeliveryLocation", deliveryLocationSchema);

module.exports = DeliveryLocation;
