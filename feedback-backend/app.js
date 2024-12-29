const express = require('express');
const mongoose = require('mongoose');

const loginRouter = require('./routers/loginRouter');

const app = express();

app.use('/login', loginRouter);

mongoose.connect('mongodb+srv://dassubbulakshmi:dNcsdRAWeXP7qBop@feedback.owdtv.mongodb.net/?retryWrites=true&w=majority&appName=feedback').then(() => {
    console.log("connection established");
}).catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("server running in code 3000");
});