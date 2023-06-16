const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
  },
  condition: {
    type: String,
  },
  appointments: { type: Array, default: [] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const patient = mongoose.model("patient", patientSchema);

module.exports = patient;
