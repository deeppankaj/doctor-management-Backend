const express = require("express");
const router = new express.Router();
const { findUser , registerUser ,loginUser,verifyUser, updateUser} = require("../Controller/UserController")

//* Get user data from its email-id
router.get("/user", findUser );

//*  add new user to database
router.post("/user/register", registerUser );

//*  Login user to Account
router.post("/user/login", loginUser );

//*  verify user to Account
router.post("/user/verify", verifyUser );

//*  verify user to Account
router.post("/user/verify", updateUser);

module.exports = router;
