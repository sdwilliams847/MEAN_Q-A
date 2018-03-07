var mongoose    = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema = mongoose.model('User',new mongoose.Schema({
    name:{type:String, required: [true, "Last name is required."], minLength: [2, "Last name must be at least 2 chracters."]
    },
    _answers:[{type:ObjectId, ref:"Answers"}]
    
},{timestamps:true}));
