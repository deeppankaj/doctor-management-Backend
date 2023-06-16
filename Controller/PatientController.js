const Patient = require("../Models/PaitentModel")
const User = require("../Models/UserModel")

const addNewPatient = async (req,res)=>{
    if(req.body.email){
        const email = req.body.email
        const user = await User.findOne({email});
        if(user.usertype==="patient"){
            const element = new Patient(req.body);
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



module.exports = {addNewPatient};
