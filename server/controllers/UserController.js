let User        = require("mongoose").model("User");


module.exports = {
    register:function(req,res){
        let user = User.findOne({name:req.body.name},(err,user)=>{
            if(user){
                req.session.user_id = user.id;
                console.log(user.name +" has just logged in")
                return res.json(user);
            }else{
                let user = new User(req.body);
                console.log("Saving new user....")
                user.save((err)=>{
                    if(err){
                        console.log("Save fail!")
                        return res.json(err.errors);
                    }else{
                        req.session.user_id = user.id;
                        console.log("Save successful!")
                        return res.json(user);
                    }
                });
            }
        });
    },

    findOne:function(req,res){
        console.log("UserController - findOne() session user = "+req.session.user_id)
        User.findById(req.session.user_id,(err,user)=>{
            if(user){
                return res.json(user);
            }else{
            }
        });
    },

    getall:function(req,res){
        User.find({}, (err,users)=>{
            if(err){
                console.log("error")
            }else{
                return res.json(users)
            }
        })
    }
}
