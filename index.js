const express = require("express")
const ejs = require("ejs")

require("dotenv").config()

const app = express()

app.set("view engine","ejs")

app.set(express.static("public"))

app.use("/api",(req,res)=>res.send("api is working..."))

const PORT = process.env.PORT || 3210

app.listen(PORT,()=>{
    console.log(`server started running on port:${PORT}`)
})