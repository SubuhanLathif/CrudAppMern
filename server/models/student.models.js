// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
 fullName:{type:String,required:true},
 email:{type:String,required:true,unique:true},
 phoneNo:{type:Number,required:true},   
 gender:{type:String,required:true},
 photo:{type:String},
 photo: { type: String, default: 'https://placehold.co/80x80&text=No+Photo'},
 address:{type:String,required:true},
});


// default collection name
// module.exports = mongoose.model('User',userSchema)

//custom collection name
// module.exports = mongoose.model('User',userSchema,'students_info');

// Create your model
const Students = mongoose.model('User',userSchema,'students_info');
export default Students;

//User - This is the name of the Mongoose model.
//userSchema - This defines the structure of the documents in your MongoDB collection.
//students_info - collection name