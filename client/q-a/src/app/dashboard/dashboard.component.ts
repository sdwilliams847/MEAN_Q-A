import { Component, OnInit } from '@angular/core';
import { UserService } from "../user/user.service";
import { QuestionService } from "../q-a.service";
import {Router, ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','../CSS/bootstrap.min.css']
})
export class DashboardComponent implements OnInit {
  private user:any;
  private questions:any;
  private search:String;


  constructor(private _us:UserService,private _qs:QuestionService,private router:Router) { }


  ngOnInit() {
    if(!this._us.isValid()){
      this.router.navigate(["/"]);
    }else{
     this._us.findOne(data=>{
       this.user = data,
       console.log(this.user);
     });
     this.search="";
    }
    this.questions = [];
    this._qs.all((data)=>{
        for (var i = data.length-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(data[j-1]._answers < data[j]._answers){
                var temp = data[j];
                data[j] = data[j-1];
                data[j-1] = temp;
            }
          }
        }
        for(let i=0; i < data.length; i++){
            this.questions.push(data[i]);
        }
        console.log("This data is sorted by likes: ",this.questions);
    });
  }
  

}
