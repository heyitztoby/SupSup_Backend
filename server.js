require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const storeRoute = require("./routes/storeRoute");
const userRoute = require("./routes/userRoute");
const deliveryLocationRoute = require("./routes/deliveryLocationRoute");
const messageRoute = require("./routes/messageRoute");
const foodRoute = require("./routes/foodRoute");
const orderRoute = require("./routes/orderRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// adding api routes
app.use("/api/store", storeRoute);
app.use("/api/user", userRoute);
app.use("/api/deliveryLocation", deliveryLocationRoute);
app.use("/api/message", messageRoute);
app.use("/api/food", foodRoute);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  // throw new Error("FAKE ERROR");
});

app.use(errorMiddleware);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// const { MongoClient } = require("mongodb");
// const client = new MongoClient(MONGODB_URL);

// async function run() {
//   try {
//     await client.connect();

//     const db = client.db("sample_mflix");
//     const coll = db.collection("comments");

//     const cursor = coll.find({
//       name: "Garrett Obrien",
//       text: "Dolor atque animi voluptatibus laborum architecto. Voluptatem fugiat omnis optio illo qui laborum exercitationem sed. Totam voluptatem eligendi qui laudantium numquam magni.",
//     });

//     await cursor.forEach(console.log);
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);
