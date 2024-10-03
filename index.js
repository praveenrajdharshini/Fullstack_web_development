import e from "express";
import en from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";
const app=e();
en.config();
app.use(bodyparser.json())
const PORT = process.env.PORT || 5000;  
const encryp=process.env.encryp

mongoose.connect("mongodb+srv://new_user11:newuser11@custmer.vocvmkz.mongodb.net/").then(()=>{
    console.log("mongodb conneted");
    app.listen(PORT,()=>{
        console.log("bonchoo "+PORT)
        console.log(encryp)
    })
})