// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";

const Dashboard = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/feedback').then(response => {
            setFeedbacks(response.data);
        });
    }, []);

    const deleteFeedback = (id) => {
        axios.delete(`http://localhost:5000/api/feedback/${id}`).then(() => {
            setFeedbacks(feedbacks.filter(feedback => feedback._id !== id));
        });
    };

    return (
        <>
        <Navbar></Navbar>
        <div>
            <h1>Feedback Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Duration</th>
                        <th>Feedback Comments</th>
                        <th>Feedback Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map(feedback => (
                        <tr key={feedback._id}>
                            <td>{feedback.courseName}</td>
                            <td>{feedback.courseDuration}</td>
                            <td>{feedback.feedbackComments}</td>
                            <td>{feedback.feedbackRating}</td>
                            <td>
                                <button onClick={() => deleteFeedback(feedback._id)}>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Dashboard;
