const mongoose = require('mongoose');
require('dotenv').config()
const url=process.env.MongoURL;
const connection=mongoose.connect(url);

const UserModel=mongoose.model('user',mongoose.Schema({
name:String,
email:String,
password:String,
tickets:[]


}));



const Busmodel=mongoose.model("bus",mongoose.Schema({
name:String,
From:String,
To:String,
Seats:[],
Price:Number

}))















module.exports={connection,UserModel,Busmodel}



