const Doctor = require("../Models/DoctorModel")
const User = require("../Models/UserModel")

const addNewDoctor = async (req,res)=>{
    if(req.body.email){
        const email = req.body.email
        const user = await User.findOne({email});
        if(user.usertype==="doctor"){
            const element = new Doctor(req.body);
            try {
                await element.save().then(console.log("Saved"));
                res.send("created");
              } catch (error) {
              response = error.message
              res.status(400).json("failed");
              }
        }else{
            res.status(402).json("user not found");
        }
    }else{
        res.status(400).json("failed");
    }
}

const addAppointment = async (req,res)=>{
    
    res.send(req.body)
}

module.exports = {addNewDoctor ,addAppointment};
