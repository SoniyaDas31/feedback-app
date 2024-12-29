import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Alert, Box, Button, CircularProgress, Paper, TextareaAutosize, TextField, Typography } from '@mui/material';

const FeedbackDashboard = () => {

    const user_id  = localStorage.getItem('userid');
    

    const navigate = useNavigate();


    const [courseList, setCourseList] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [userdata, setUserdata] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [courseId, setCourseId] = useState([]);
    
    const [submissionComments, setSubmissionComments] = useState("");
    const [submissionSuccess, setSubmissionSuccess] = useState("");

    const session = localStorage.getItem('session');
    //console.log(`Session is ${session}`);

    // Date Format Function
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }   


    // fetching Project List for Student to select
    useEffect(() => {
        const fetchCourseList = async () => {
            try {
                const response = await axios.get(`https://localhost:3000/course/`);
                setCourseList(Array.from(response.data));
                //console.log(response.data);
                //console.log(projectList);
            } catch (err) {
                console.error("Error fetching project details:", err);
                setError("Failed to fetch project details.");
            }
        };

        fetchCourseList();
    }, []);




    // fetching from mongo db student data using id
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://localhost:3000/users/${user_id}`);
                setUserdata(response.data);
                //console.log(response.data);
            } catch (err) {
                console.error("Error fetching user details:", err);
                setError("Failed to fetch user details.");
            }
        };

        fetchUserData();
    }, [user_id]);

    const isCourse = userdata?.course_id;
    if (isCourse) {
        //console.log(isProject);
        isCourse.forEach(function (value, key) {
            //console.log(value.project_id);
            localStorage.setItem('courseid', value.course_id);
        });
    } else {
        localStorage.setItem('courseid', '');


    }

    const courseIdLocal = localStorage.getItem('courseid');

    if (!courseIdLocal) {
        console.log("No Course Feedback given");
        //setEnrolled(false);
    } else {
        console.log("Course Feedback given Already");
        //setEnrolled(true);
    }

    // fetching course details for requested id in the url
    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const response = await axios.get(`https://localhost:3000/course/${courseIdLocal}`);
                setSelectedCourse(response.data);
                console.log('Course Id local in API', courseIdLocal);
            } catch (err) {
                console.error("Error fetching project details:", err);
                setError("Failed to fetch project details.");
            }
        };

        fetchCourseDetails();
    }, [courseIdLocal]);



    // Define function that will open the modal
    const handleOpenModal = (course_id) => {
        setCourseId(`${course_id}`);
        setIsModalOpen(true);
        return projectid;
    };

    // Define function that will close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };





    return (
        <>
            <Navbar />



            <div className="container-fluid">
                <div className="row mt-4 justify-content-center">
                    <div className="col-12">
                        <h4 className="mb-4">Feedback Dashboard</h4>
                        <div className="card">
                            <div className="card-header">
                                <h5> Info</h5>
                            </div>
                            <div className="card-body">

                                <form>
                                    <div className="row row-gap-3">
                                        <div className="col-3">
                                            <label htmlFor="">Email</label>
                                            <input value={userdata?.email} disabled name="studEmail" type="text" placeholder="Email" className="form-control" />
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>



                        {/* project list */}
                        <div className="card mt-4">
                            <div className="card-header">
                                <h5>Course List</h5>
                            </div>
                            <div className="card-body">
                                {courseIdLocal ? (
                                    selectedCourse ? (
                                        <Paper sx={{ padding: "1rem", marginBottom: "2rem" }} elevation={3}>
                                            <Typography variant="h5">{selectedCourse.title}</Typography>
                                           
                                            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                                                {selectedCourse.description}
                                            </Typography>
                                            <Typography variant="subtitle2"  sx={{ marginBottom: "1rem" }} color="error">
                                                End Date: &nbsp;{formatDate(selectedCourse?.internship_end_date)}
                                            </Typography>
                                            {selectedCourse.overview_document && (
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    href={selectedCourse.overview_document}
                                                    target="_blank"
                                                    mt={1}
                                                    download
                                                >
                                                    Download Project Overview
                                                </Button>


                                            )} &nbsp;&nbsp;&nbsp;
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                href="/projects"
                                            >
                                                View Project
                                            </Button>
                                            
                                        </Paper>
                                    ) : (
                                        <Typography variant="body1" color="error">
                                            No project details available.
                                        </Typography>
                                    )
                                ) : (

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-center">No</th>
                                                <th scope="col" className="text-center">Course Title</th>
                                                <th scope="col" className="text-center">Course Description</th>
                                                <th scope="col" className="text-center">Course Duration</th>
                                                <th scope="col" className="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courseList?.map((course, index) => {
                                                return (
                                                    <tr>
                                                        <td className="text-center">{index + 1}</td>
                                                        <td className="text-center">{course?.title}</td>
                                                        <td className="text-center">{course?.description}</td>
                                                        <td className="text-center">{formatDate(course?.duration)}</td>
                                                        <td className="text-center">
                                                            <button className="btn btn-primary me-3 pl-2" data-toggle="modal" onClick={() => handleOpenModal(course?._id)} data-target="#projectConfirmModal"><i className="fa-regular fa-plus pe-2 pointer" ></i> Select Project </button>

                                                        </td>
                                                    </tr>
                                                );
                                            })
                                            }
                                        </tbody>
                                    </table>

                                )}



                                <div id="projectConfirmModal" className={`modal ${isModalOpen ? 'open' : ''}`} role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" onClick={() => handleCloseModal()}>&times;</button>
                                                <h4 className="modal-title">Course Feedback</h4>
                                            </div>
                                            <div className="modal-body">
                                                <p>Feedback Form heree</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" onClick={() => handleSelectProject(courseId)}>Submit Feedback</button>
                                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => handleCloseModal()}>Cancel</button>
                                            </div>
                                            {submissionSuccess && <Alert severity="success">{submissionSuccess}</Alert>}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default FeedbackDashboard;