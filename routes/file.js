const route = require('express').Router();
const multer  = require('multer');
const path = require('path');
const collection = require('../model/FileModel');
const  {v4 }  = require('uuid');

const storage = multer.diskStorage({
  destination: function (req,res,cb){
    cb(null,'uploads/');
  },
  filename: function (req,file,cb){
    //console.log(file);
    const uniqueName = `${Date.now()}${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`;
    cb(null,uniqueName);
  },
});
const upload = multer({ storage: storage }).single('myfile');

route.post('/',(req,res)=>{
  upload(req,res, async function (err){
    if(err){
      res.json({error:err});
    }
    else{
      //console.log(req.file);
      const fileDB = new collection({
        filename:req.file.filename,
        size:req.file.size,
        path:req.file.path,
        uuid:v4()
      });
      const responce = await fileDB.save();
      res.status(200).json({url:`${process.env.APP_BASE_URL}file/${responce.uuid}`});
    }
    
  });
});

module.exports = route;