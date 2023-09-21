const mongoose = require("mongoose");

const storeSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Please enter a store name"],
    },
    Location: {
      type: String,
      required: [true, "Please enter a store location"],
    },
    Picture: {
      type: String,
      required: [true, "Please insert a picture"],
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("SupSupDB");
const Store = myDB.model("Store", storeSchema);

module.exports = Store;
