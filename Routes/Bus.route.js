const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {connection,UserModel,Busmodel}= require('../models/model');
const { watchman } = require('../middlewere/watchman');

require('dotenv').config()





const Busrouter=express.Router()



Busrouter.get("/",async(req,res)=>{
let q=req.query;
if(Object.keys(q).length>0){
    let Buses=await Busmodel.find(q)

    res.send({"Buses":Buses})

}else {
    let Buses=await Busmodel.find()

    res.send({"Buses":Buses})
}


})


Busrouter.get("/:id",async(req,res)=>{
let id=req.params.id;
let bus=await Busmodel.find({"_id":id})
res.send({"bus":bus[0]})
})

Busrouter.get('/search',async(req,res)=>{
let data=req.body;
let Buses = await Busmodel.find(data)
res.send({"buses":Buses})
})



Busrouter.post("/",watchman, async(req,res)=>{
let {seats,name,From,To,Price}=req.body;

let Seats=[];

for(let i=0;i<seats;i++){

    let s= {
        "seatnumber":i+1,
        "isbooked":false,
        "BookedDates":[],
    
    }

Seats.push(s)

}

let bus = await Busmodel.insertMany([{name,From,To,Seats,Price}])


res.send({"msg":"new bus added ","bus":bus})

})

Busrouter.put("/:id",watchman,async(req,res)=>{
    let id=req.params.id;
    let {seats,name,From,To,Price}=req.body;
let data={};

if(seats!=undefined){
    let Seats=[];

    for(let i=0;i<seats;i++){
    
        let s= {
            "seatnumber":i+1,
            "isbooked":false,
            "BookedDates":[],
        
        }
    
    Seats.push(s)
    
    }    

data.Seats=Seats;

}
    
if(name!=undefined){
    data.name=name;

}

if(From!=undefined){
    data.From=From;
}

if(To!=undefined){
    data.To=To;
}
if (Price!=undefined){
    data.Price=Price
}
console.log(data)
    let bus= await Busmodel.findByIdAndUpdate(id,data);
    res.send({"msg":"Updated","bus":bus})
})


Busrouter.delete("/:id",watchman,async(req,res)=>{
    let id= req.params.id;
    let bus=await Busmodel.findByIdandDelete(id)
    res.send({"msg":"bus is deleted","bus":bus})
})

module.exports={Busrouter}













