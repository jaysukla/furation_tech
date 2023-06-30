const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {connection,UserModel}= require('../models/model')
const {watchman} = require('../middlewere/watchman')
require('dotenv').config()






const Userrouter=express.Router()




Userrouter.get('/', async (req,res)=>{

    let users = await UserModel.find()
    res.send({"users":users})
    })







Userrouter.get("/:id",async (req,res)=>{
let id= req.params.id;
let user= await UserModel.find({"_id":id})
res.send({"user":user[0]})

})


Userrouter.get('/tickets/:id',async(req,res)=>{
let id= req.params.id;
let user= await UserModel.find({"_id":id})
console.log(user)
res.send({"tickets":user[0].tickets})
})


Userrouter.post("/register", async(req,res)=>{
    let {name,email,password}=req.body;
    
    let u=await UserModel.find({email})
    if(u.length>0){
        res.send({"msg":"Registration Failed User Already Exist"})
    }else{
    
        bcrypt.hash(password, 5, async function(err, hash) {
      
            let user = await UserModel.insertMany([{name,email,password:hash}])
            
            res.send({"msg":"Registration Success","user":user})
            
            });
    
    
    }
    
    
    
    
    })
    



Userrouter.post('/login',async(req,res)=>{
let {email,password}=req.body;

let users= await UserModel.find({email});
if(users.length>0){
    let u=users[0];

  
    bcrypt.compare(password,u.password, function(err, result) {
      if (result){
        var token = jwt.sign({} ,'shhhhh');
   res.send({"msg":"Login Success","token":token,"user":u})


      }else{
res.send({"msg":"Login Failed"})


      }

    });




}else {
    res.send({"msg":"Register Please"})
}





})


   
   Userrouter.put("/update/:id",watchman,async (req,res)=>{

   let data=req.body;
   let id=req.params.id;

   let user = await UserModel.findByIdAndUpdate(id,data)
res.send({"mag":"user Updated","user":user})

   }) 
    
Userrouter.delete("/delete/:id",watchman,async (req,res)=>{
    let id=req.params.id;
    let user = await UserModel.findByIdAndDelete(id)
    res.send({"msg":"user deleted","user":user})
})

    
module.exports={Userrouter}
