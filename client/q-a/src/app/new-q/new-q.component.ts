import { Component, OnInit } from '@angular/core';
import { UserService } from "../user/user.service";
import { QuestionService } from "../q-a.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-q',
  templateUrl: './new-q.component.html',
  styleUrls: ['./new-q.component.css','../CSS/bootstrap.min.css']
})
export class NewQComponent implements OnInit {
  private question:any;
  private user:any;
  private errors:any;

  constructor(private _us:UserService, private _qs:QuestionService,private router:Router) { }


  init(){
    this.question = {
      content:"",
      description:""
    }
    this.errors = "";
  }

  ngOnInit() {
    if(!this._us.isValid()){
      this.router.navigate(["/"]);
   }else{
     this._us.findOne(data=>{
       this.user = data,
       console.log("this is coming from new-Q component "+this.user);
     });
   }
    this.init()
  }
  create(){
    this._qs.createQuestion(this.question,(data)=>{
      if(data.message){
        this.errors = data.message;
      }else{
        this.router.navigate(["dashboard"]);
      }
    })
  }


}
