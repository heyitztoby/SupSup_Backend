const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    StoreID: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter a store ID"],
    },
    Name: {
      type: String,
      required: [true, "Please enter a food name"],
    },
    Price: {
      type: Number,
      required: [true, "Please enter a food price"],
    },
    Thumbnail: {
      type: String,
      required: [true, "Please insert a thumbnail"],
    },
    Category: {
      type: String,
      required: [true, "Please enter a food category"],
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("SupSupDB");
const Food = myDB.model("Food", foodSchema);

module.exports = Food;
