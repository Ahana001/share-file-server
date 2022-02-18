const mongoose = require('mongoose');

const schema = mongoose.Schema({
    filename:{type:String,required:true},
    path:{type:String,required:true},
    size:{type:Number,required:true},
    uuid:{type:String,required:true}
},{ timestamps: true });

const fileCollection = mongoose.model('file',schema);
module.exports = fileCollection;