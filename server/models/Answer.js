var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('Answer', new mongoose.Schema({
    content:{type:String, required:[true,"Your answer must be at least 5 characters"], minlength:[5,"Your answer must be at least 5 characters"]},
    description:{type:String, required:false},
    likes:{type:Number, default:0},
    _user:{type:ObjectId, ref:"User"},
    _question:{type:ObjectId, ref:"Question"}

},{timestamps:true}));