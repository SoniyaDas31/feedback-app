const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userModel = require('../models/userModel');
router.use(express.json());

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await userModel.findOne(email);
        console.log(user);
        if (!user) {
            res.status(400).send("Student not found");
        }else{
            if(password===user.password){
                res.status(200).send(student);
               // res.status(200).send('success');
            }
            
        }
       
    } catch (error) {
        res.status(500).send("error while fetching student details", error);
    }
});

module.exports = router;