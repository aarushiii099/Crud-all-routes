const express=require("express")
const server=express()
const bp=require("body-parser")
const mongoose=require("mongoose")
const adminRoutes=require("./routes/AdminRoutes")



server.use(bp.json())
server.use("/Admin",adminRoutes)



mongoose.connect("mongodb://localhost:27017/Sprint1").then((res)=>console.log("Connected to DB!")).catch((err)=> console.log(err));

server.listen(3001,()=>console.log("server started"))
