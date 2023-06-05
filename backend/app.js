const express  = require("express");
const app = express();
app.use(express.json())
const mongoose = require("mongoose")
const cors = require("cors");
app.use(cors());
app.listen(5000, () =>{
  console.log("server connected");
})

const mongoURL = "mongodb+srv://gokul:gokul2002@cluster0.lrlpbxt.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {
  useNewUrlparser:true
}).then(() => {console.log("Databse Connected");}).catch((e) => console.log(e))



require("./projectdeatils")
const User = mongoose.model("projectinfo")
app.post("/post", async (req,res) => {
  const {name, email, phone, subject, message} = req.body
  try {
    await User.create({
      name,
      email,
      phone,
      subject,
      message
    })
    res.send(req.body)
    console.log(req.body)
  } catch (error) {
    res.send({status:'Unable to user cannot find'})
  }
})