const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {connection,UserModel}= require('./models/model')

require('dotenv').config()
const PORT=process.env.PORT || 8080 ;
const app=express();
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{


res.send({"msg":"Api is Active"})

})


// All routes
const {Userrouter} = require("./Routes/user.route")
const {Busrouter}=require("./Routes/Bus.route")
const {Bookingrouter} = require('./Routes/booking.route')


//Send to routes
app.use("/user",Userrouter)
app.use("/Bus",Busrouter)
app.use("/booking",Bookingrouter)






app.listen(PORT,()=>{
    console.log(`Server is Running on port ${PORT}`)

    try {
        connection;
        console.log("DB connection Successfull")
    } catch (error) {
        console.log("Err in DB connection ")
        console.log(error)
    }
})
