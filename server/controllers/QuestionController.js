let Question        = require("mongoose").model("Question");
let Answer        = require("mongoose").model("Answer");
let User          = require("mongoose").model("User");

module.exports = {
    create:function(req,res){
        let question = new Question(req.body);
        question.user = req.session.user_id;
        console.log("If this is undefined, you have a serious problem: ",question);
        question.save((err)=>{
            if(err){
                console.log("Question Save failed!")
                return res.json(err.errors.content);
            }else{
                console.log("Question Save successful!")
                return res.json(question);
            }
        })
    },

    all:function(req,res){
        Question.find({})
            .populate({
                path: '_answers', 
                model: 'Answer' })
            .exec((err, questions)=>{
                if(err){
                    return res.json(err);
                } else{
                    return res.json(questions);
                }
            })
    },

    show:function(req,res){
        console.log(req.params.id);
        Question.findById(req.params.id)
            .populate({ 
                path: '_answer', 
                model: 'Answer' })
            .exec((err, questions)=>{
                if(err){
                    return res.json(err);
                } else{
                    return res.json(questions);
                }
            })
    },
}