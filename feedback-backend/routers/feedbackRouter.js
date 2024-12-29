// Importing required modules
const router = express.Router();
const express = require('express');
const mongoose = require('mongoose');
const feedbackModel = require('../models/feedbackModel');
const cors = require('cors');
const bodyParser = require('body-parser');
router.use(express.json());



// API Endpoints

// Get all feedback
router.get('/api/feedback', async (req, res) => {
    try {
        const feedbacks = await feedbackModel.find();
        res.json(feedbacks);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add new feedback
router.post('/api/feedback', async (req, res) => {
    try {
        const { courseName, courseDuration, feedbackComments, feedbackRating } = req.body;
        const newFeedback = new feedbackModel({ courseName, courseDuration, feedbackComments, feedbackRating });
        await newFeedback.save();
        res.json(newFeedback);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Update feedback
router.put('/api/feedback/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { courseName, courseDuration, feedbackComments, feedbackRating } = req.body;
        const updatedFeedback = await feedbackModel.findByIdAndUpdate(id, { courseName, courseDuration, feedbackComments, feedbackRating }, { new: true });
        res.json(updatedFeedback);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Delete feedback
router.delete('/api/feedback/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await feedbackModel.findByIdAndDelete(id);
        res.send('Feedback deleted');
    } catch (err) {
        res.status(500).send('Server error');
    }
});