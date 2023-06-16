const express = require("express");
const {addNewPatient } = require("../Controller/PatientController");
const router = new express.Router();

router.post("/patient/registerpatient",addNewPatient);

module.exports = router