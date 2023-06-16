const mongoose = require("mongoose");
const URI = "mongodb+srv://pankaj:pk1234@cluster0.f4msuy2.mongodb.net/HSM";
const db = mongoose.connection;
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }

// TODO   In case of error handling in mongobd

//   db.on("error", (error) => {
//     console.error("MongoDB connection error:", error);
//   });

//   db.once("open", () => {
//     console.log("Connected to MongoDB");
//   });

//   db.on("disconnected", () => {
//     console.log("Disconnected from MongoDB");
//   });
};

module.exports = connectDB;
