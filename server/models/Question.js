var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('Question', new mongoose.Schema({
    content:{type:String, required:true, minlength:[10,"Your question must be at least 10 characters"]},
    description:{type:String, required:false, default:""},
    _answers:[{type:ObjectId, ref:"Answers"}]

},{timestamps:true}));