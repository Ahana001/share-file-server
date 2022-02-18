const express = require("express");
const collection = require('../model/FileModel');

const route = express.Router();
route.get('/:uuid', async(req,res)=>{
    const file = await collection.findOne({uuid:req.params.uuid});
    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath);
});
module.exports = route;