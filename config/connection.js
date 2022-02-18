require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@filedetails.nutpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
mongoose.connection.on('connected',()=>{
    console.log("Database connected....");
});
mongoose.connection.on('error',()=>{
    console.log("please make sure you are connected to internet");
});