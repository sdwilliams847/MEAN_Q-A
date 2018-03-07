import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../q-a.service";
import {UserService} from "../user/user.service";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css','../CSS/bootstrap.min.css']
})
export class QuestionComponent implements OnInit {
  private user:any;
  private question:any;
  private question_id:any;
  private answers:any;
  private search:String;

  constructor(private activatedRoute: ActivatedRoute, private _qs:QuestionService, private _us:UserService, private router:Router) { }

  init(){
    this._qs.getQandA(this.question_id,ans=>{
      this.answers = ans,
      console.log("This is the unsorted data: "+this.answers);
      for (var i = this.answers.length-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
          if(this.answers[j-1].likes<this.answers[j].likes){
              var temp = this.answers[j];
              this.answers[j] = this.answers[j-1];
              this.answers[j-1] = temp;
           }
        }
      }
      console.log("This data is sorted by likes: ",this.answers);
    });
  }




  ngOnInit() {
    this.answers = [];
    if(!this._us.isValid()){
      this.router.navigate(["/"]);
   } else {
    this.search = "";
    this._us.findOne(data=>{
      this.user = data
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.question_id = params.id
      this._qs.findOne(this.question_id,data=>{
        this.question = data,
        console.log("Question that I am getting from DB on page load: ",this.question)
      })
    });
    this.init();
    }
  }

  like(id){
    this._qs.like(id, like=>{
      this.init()
    })
    
  }

}
