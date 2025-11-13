const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(mongo_url);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log("MongoDB Error:", err);
  }
};

connectDB();

module.exports = mongoose;
