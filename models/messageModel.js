const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    Message: {
      type: String,
      required: [true, "Please enter a message"],
    },
  },
  {
    timestamps: true,
  }
);

const myDB = mongoose.connection.useDb("SupSupDB");
const Message = myDB.model("Message", messageSchema);

module.exports = Message;
