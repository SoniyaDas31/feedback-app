const express = require('express');
const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,unique:true,required:true},
    course_feedback:[
        {
          course_id: { type: mongoose.Schema.Types.ObjectId, ref: "projects" }, // Connect to Projects
        }]
})

const userModel= mongoose.model("users", userSchema);
module.exports=userModel; 