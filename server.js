require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT;

// Cors 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
require('./config/connection');

app.use(express.static('public'));
app.use(express.json());

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.use('/file/dowload',require('./routes/dowload'));
app.use('/file',require('./routes/show'));
app.use('/api/files',require('./routes/file'));
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});
