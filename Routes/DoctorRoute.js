const express = require("express");
const { addNewDoctor, addAppointment, getDoctor } = require("../Controller/DoctorController");
const router = new express.Router();

router.post("/doctor/registerdoctor",addNewDoctor);
router.post("/doctor/appointment",addAppointment);
router.get("/doctor",getDoctor);

module.exports = router