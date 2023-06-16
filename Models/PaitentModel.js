const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
  },
  illness: {
    type: String,
  },
  condition:{
    type: String,
  },
  appointments:[{
    
  }], 
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const patient = mongoose.model('patient', patientSchema);

module.exports = patient;
