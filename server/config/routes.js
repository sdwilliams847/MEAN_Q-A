let path              = require("path");
let mongoose          = require("mongoose");
let UserController    = require("../controllers/UserController.js");
let QuestionController= require("../controllers/QuestionController.js");
let AnswerController= require("../controllers/AnswerController.js");

module.exports = function(app){
    app.post("/server/users/register",UserController.register);
    app.get("/server/users/find",UserController.findOne);
    app.get("/server/users/all",UserController.getall);
    

    app.post("/server/questions/create",QuestionController.create);
    app.get("/server/questions/all",QuestionController.all);
    app.get("/server/questions/show/:id",QuestionController.show);

    app.post("/server/answers/create",AnswerController.create);
    app.get("/server/answers/all",AnswerController.all);
    app.get("/server/answers/show/:id",AnswerController.show);
    app.get("/server/answers/getqanda/:id",AnswerController.findAllAns);
    app.get("/server/answers/like/:id",AnswerController.like);

    app.all("*",(req,res,next)=>{
        res.sendFile(path.resolve("./client/q-a/dist/index.html"))
    });
}