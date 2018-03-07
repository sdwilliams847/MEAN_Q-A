let Question      = require("mongoose").model("Question");
let Answer        = require("mongoose").model("Answer");
let User          = require("mongoose").model("User");

module.exports = {
    create:function(req,res){
        let answer = new Answer(req.body);
        console.log("If this is undefined, you have a serious problem: "+answer);
        answer.save((err)=>{
            if(err){
                console.log("Answer Save failed!")
                return res.json(err.errors.content);
            }else{
                User.findOne({_id:answer._user},(err,user)=>{
					if(user){
                        user._answers.push(answer._id);
						user.save(err=>{
							if(err){
								return res.json({errors:user.errors});
							}else{
                                console.log("Attempting to save _answer in question's array....")
                                console.log("the this should be the id of the question stored inside the answer: "+ answer._question)
                                Question.findOne({_id:answer._question},(err,question)=>{
                                    if(err){
                                        return res.json({errors:user.errors});
                                    }else{
                                        question._answers.push(answer._id);
                                        question.save((err)=>{
                                            if(err){
                                                console.log("STOP WHAT YOU ARE DOING! the question's answers were not updated correctly.")
                                            } else{
                                                console.log("GREAT SUCCESS! check your question's _answer array")
                                                return res.json(answer);
                                            }
                                        });
                                    }
                                });
                            }
						});
					}else{
						return res.json({errors:"Failed to lookup user."});
					}
                })
            }
        })
    },

    all:function(req,res){
        Answer.find({})
            .populate({ 
                path: '_user', 
                model: 'User' })
            .exec((err, answers)=>{
                if(err){
                    return res.json(err);
                } else{
                    return res.json(answers);
                }
            })
    },

    show:function(req,res){
        Answer.findById(req.params.id)
            .populate({ 
                path: '_user', 
                model: 'User' })
            .populate({ 
                path: '_answer', 
                model: 'Answer' })
            .exec((err, answers)=>{
                if(err){
                    return res.json(err);
                } else{
                    return res.json(answers);
                }
            })
    },

    findAllAns:function(req,res){
        console.log("WE CALLLED THE LIKE!!!!!")
        Answer.find({_question:req.params.id})
        .populate({
            path: '_user',
            model:"User"
        })
        .exec((err, answers)=>{
            if(err){
                return res.json(err);
            } else{
                return res.json(answers);
            }
        })
    },

    like:function(req,res){
        console.log("someone just liked answer ID: "+req.params.id)
        Answer.findOne({_id:req.params.id},(err,answer)=>{
            console.log(answer);
            if(answer){
                answer.likes += 1;
                answer.save((err)=>{
                    if(err){
                        console.log("We have more errors")
                    }else {
                        return res.json(answer.likes);
                    }
                })
            } else{
                console.log("We have errors");
                return res.json(err);
            }
        })
    }

}