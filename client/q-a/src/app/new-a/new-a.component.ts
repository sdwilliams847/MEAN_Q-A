import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from "../user/user.service";
import { QuestionService } from "../q-a.service";
import {Router, ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-new-a',
  templateUrl: './new-a.component.html',
  styleUrls: ['./new-a.component.css','../CSS/bootstrap.min.css']
})
export class NewAComponent implements OnInit, OnDestroy {
  private answer:any;
  private question:any;
  private user:any;
  private errors:any;
  private subs:any;


  constructor(private activatedRoute: ActivatedRoute,private _us:UserService, private _qs:QuestionService, private router:Router) { }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  init(){
    this.answer = {
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
       console.log("this the user currently logged in:", this.user);
     });

    this.subs = this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params.id)
      let id = params.id
      this._qs.findOne(id,data=>{
        this.question = data,
        console.log("Question that I am getting from DB on page load: ",this.question)
      })
    });
    this.init()
    }
  }

  createAnswer(){
    console.log("The Answer that is being submitted is: ", this.answer)
    this.answer._user = this.user._id
    this.answer._question = this.question._id
    console.log("The Answer that is being submitted is: ", this.answer)
    this._qs.createAnswer(this.answer,(data)=>{
      if(data){
        this.router.navigateByUrl("/dashboard");
          console.log("we received errors: ")
      }else{
        console.log("SUCCESS!")
        this.router.navigateByUrl("/dashboard");
      }

    })
  }


}
