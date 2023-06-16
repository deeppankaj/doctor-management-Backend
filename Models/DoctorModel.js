const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
  },
  fees: {
    type: Number,
  },
  appointments: [
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      email: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      gender: {
        type: String,
      },
      department: {
        type: String,
      },
      condition: {
        type: String,
      },
      date: {
        type: String,
      },
      time: {
        type: String,
      },
      status: {
        type: String,
        default: "pending",
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const doctor = mongoose.model("doctor", doctorSchema);

module.exports = doctor;
