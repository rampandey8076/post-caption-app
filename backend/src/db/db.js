const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB:", mongoose.connection.name);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = connectDB;