// AddFeedback.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const AddFeedback = () => {
    const [form, setForm] = useState({
        courseName: '',
        courseDuration: '',
        feedbackComments: '',
        feedbackRating: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/feedback', form).then(() => {
            alert('Feedback added successfully');
        });
    };

    return (
        <div>
            <h1>Add Feedback</h1>
            <form onSubmit={handleSubmit}>
                <label>Course Name: <input type="text" name="courseName" value={form.courseName} onChange={handleChange} /></label>
                <label>Course Duration: <input type="text" name="courseDuration" value={form.courseDuration} onChange={handleChange} /></label>
                <label>Feedback Comments: <textarea name="feedbackComments" value={form.feedbackComments} onChange={handleChange}></textarea></label>
                <label>Feedback Rating: <input type="number" name="feedbackRating" value={form.feedbackRating} onChange={handleChange} /></label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddFeedback;