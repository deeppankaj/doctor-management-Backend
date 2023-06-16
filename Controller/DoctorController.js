const Doctor = require("../Models/DoctorModel")
const User = require("../Models/UserModel")
const Patient = require("../Models/PaitentModel")

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
const getDoctor = async (req,res)=>{
    const docdata = await Doctor.find();
    res.send(docdata)

}

const addAppointment = async (req,res)=>{
    const email = req.body?.pateintemail;
    let response 
    if(email){
        const userdata = await User.findOne({email})
        const doctordata = await User.findOne({email:req.body?.doctoremail})
        const patientdata = await Patient.findOne({email})
        if(userdata){
            if(userdata.usertype==="patient"){
                const prevappointment = patientdata.appointments;
                const appointment = [...prevappointment].concat(req.body);
                    try {
                        await Patient.findOneAndUpdate({email},{appointments:appointment})
                        response="appointment request send"
                        console.log(response);
                    } catch (error) {
                        response = error.message
                    }
               }else{
                   response="The doctor you requested is not available"
               }
        }else{
            response="user not found"
        }
        if(doctordata){
            if(doctordata.usertype==="doctor"){
                const doctorinfo = await Doctor.findOne({email:req.body?.doctoremail})
                const prevappointment = doctorinfo?.appointments;
                const appointment = {
                    name:`${userdata.firstname} ${userdata.lastname}`,
                    image:userdata?.image,
                    email:userdata?.email,
                    age:patientdata?.age,
                    gender:patientdata?.gender,
                    department:req.body?.department,
                    condition:req.body?.patientdiscription,
                    date:req.body?.appointmentdate,
                    time:req.body?.appointmenttime,
                    status:req.body?.status,
                };
                const updateval = [...prevappointment].concat(appointment)
                    try {
                        await Doctor.findOneAndUpdate({email:req.body?.doctoremail},{appointments:updateval})
                        response="appointment updated"
                    } catch (error) {
                        response = error.message
                    }
               }else{
                   response="You are not registered doctor"
               }
        }
        res.send(response)
    } else{
        res.send("invalid data")
    }
}

module.exports = {addNewDoctor ,addAppointment , getDoctor};
