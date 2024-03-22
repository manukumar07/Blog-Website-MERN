const mongoose = require("mongoose");
const dotenv = require("dotenv");

const DB =
  "mongodb+srv://palmanukumar53:fnSRVUTr4xjGHLqC@cluster0.ckfldd7.mongodb.net/";
// const DB = process.env.MONGODB_URL; // env file db link

const connectDb = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connection successfully");
  } catch (error) {
    console.error(" Connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
