const express = require('express')
const mongoose=require('mongoose')
// Define the schema and model
const feedbackSchema = new mongoose.Schema({
    courseName: String,
    courseDuration: String,
    feedbackComments: String,
    feedbackRating: Number
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports=feedbackModel; 