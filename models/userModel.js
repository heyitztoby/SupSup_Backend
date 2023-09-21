const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    Username: {
      type: String,
      required: [true, "Please enter your username"],
    },
    Password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    Phone: {
      type: Number,
      required: [true, "Please enter your phone number"],
    },
    Email: {
      type: String,
      required: [true, "Please enter your email address"],
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("SupSupDB");
const User = myDB.model("User", userSchema);

module.exports = User;
