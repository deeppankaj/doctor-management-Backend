const express = require("express");
const { addNewDoctor, addAppointment } = require("../Controller/DoctorController");
const router = new express.Router();

router.post("/doctor/registerdoctor",addNewDoctor);
router.post("/doctor/appointment",addAppointment);

module.exports = router