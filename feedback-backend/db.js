const mongoose =require('mongoose');
const connectDB=mongoose.connect('mongodb+srv://dassubbulakshmi:dNcsdRAWeXP7qBop@feedback.owdtv.mongodb.net/?retryWrites=true&w=majority&appName=feedback')
.then(()=>{
console.log("Connection establised");
})
.catch((err)=>{
console.log(err)
})
module.exports=connectDB;



