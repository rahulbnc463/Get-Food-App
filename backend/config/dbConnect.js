const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");

    //Getting Data from DB..............
    const MainData = await mongoose.connection.db.collection("food_items");
    const cursor = MainData.find({});
    const dataArray = await cursor.toArray();

    //log Data..............
    // console.log(dataArray);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB;
