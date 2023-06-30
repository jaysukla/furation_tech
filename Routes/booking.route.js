const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {connection,UserModel,Busmodel}= require('../models/model')
const {watchman} = require('../middlewere/watchman')
require('dotenv').config()





const Bookingrouter=express.Router()



Bookingrouter.post('/:id/:Seat/:user',watchman,async(req,res)=>{
let id=req.params.id;
let seatnumber=req.params.Seat;
let {date}=req.body;
let uid=req.params.user;
let bus=await Busmodel.find({"_id":id});

let t=bus[0].Seats;
for(let i=0;i<t.length;i++){
if (seatnumber==t[i].seatnumber){
    if(t[i].isbooked==false){
        t[i].isbooked=true;
        t[i].BookedDates.push(date)
    

        let book= await Busmodel.findByIdAndUpdate(id,bus[0])

        let user = await UserModel.find({"_id":uid})
        let u=user[0]
        let ticket={
            "busid":id,
            "seatnumber":seatnumber
        
        }
        u.tickets.push(ticket)
        
        let u2=await UserModel.findByIdAndUpdate(uid,u)
        
        res.send({"msg":"seat booked","ticket":ticket,"user":u2})

    }else{
        res.send({"msg":"seat is not avalable"});

    }
    
   break;

}


}


// let book= await Busmodel.findByIdAndUpdate(id,bus[0])

// let user = await UserModel.find({"_id":uid})
// let u=user[0]
// let ticket={
//     "busid":id,
//     "seatnumber":seatnumber

// }
// u.tickets.push(ticket)

// let u2=await UserModel.findByIdAndUpdate(uid,u)

// res.send({"msg":"seat booked","ticket":ticket,"user":u2})




})



module.exports={Bookingrouter}







