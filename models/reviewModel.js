const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    StoreID: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter a store ID"],
    },
    Rating: {
      type: Number,
    },
    Content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("SupSupDB");
const Review = myDB.model("Review", reviewSchema);

module.exports = Review;
