const User = require("../Models/UserModel");
const { newToken , verifyToken } = require("../config/jwt");

//* For hashing the user password and make it secured
const bcrypt = require('bcrypt');

//* Get user data from its email-id
const findUser = async (req, res) => {
  if (req.body.email) {
    const data = await User.findOne(req.body);
    res.send(data);
  } else {
    const data = await User.find();
    res.send(data);
  }
};

//* Register user in our database
const registerUser = async (req, res) => {
  let userData;
  let response = "created";
  let userExists = await User.findOne({ email: req.body.email });
  if (!userExists) {
    if (req.body.length === undefined) {
      userData = [req.body];
    } else {
      userData = req.body;
    }
    for (let i = 0; i < userData.length; i++) {
      const newPassword = await bcrypt.hash(userData[i].password,10);
      const element = new User({
        firstname: userData[i].firstname,
        lastname: userData[i].lastname,
        image: userData[i].image,
        email: userData[i].email,
        mobile: userData[i].mobile,
        usertype: userData[i].usertype,
        password: newPassword,
        cart: userData[i].cart,
        favorites: userData[i].favorites,
        usertype: userData[i].usertype
      });
      try {
        await element.save().then(console.log("Saved"));
      } catch (error) {
      response = error.message
      }
    }
  } else {
    response = "exists";
  }
  console.log(response)
  res.send(response);
};

//* Login user to our account
const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  console.log(req.body.email);
  if (user) {
    const checkPassword = await bcrypt.compare(req.body.password,user.password)
    console.log(checkPassword)
    if (checkPassword) {
      const token = newToken(req.body.email);
      res.send({ status: "ok", token });
    } else {
      res.send("invalid credential");
    }
  } else {
    res.send("User not found ! Please signup to continue");
  }
};

//* verify user using jwt token
const verifyUser = async (req,res) => {
  const token = req.headers['x-access-token']
  const email = await verifyToken(token);
  if(typeof email==="string"){
    const data = await User.findOne({email:email});
    res.json(data);
  }else{
    res.json(email);
  }
}

const updateUser = async( req,res)=>{
  if (req.body.email) {
    const data = await User.updateOne(req.body);
    res.send(data);
  }
}

module.exports = { findUser, registerUser, loginUser , verifyUser,updateUser};
