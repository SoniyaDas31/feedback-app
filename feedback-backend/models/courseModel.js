const express = require('express')
const mongoose=require('mongoose')
const courseSchema=new mongoose.Schema({
   title:{type:String,required:true},
   description:{type:String,required:true},
   duration: {type:String,required:true},
   feedbacks: [{
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      created_at: {
         type: Date,
         default: Date.now, // Automatically sets the creation date
       },
      feedback_rating: {type:Number,required:true}
   }]
   
});
const courseModel=mongoose.model('course', courseSchema);
module.exports= courseModel;