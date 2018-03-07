import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../CSS/bootstrap.min.css']
})
export class UserComponent implements OnInit {
  private user: any;

  constructor(private _us:UserService, private _router:Router) { }

  init() {
    this.user = {
      name: "",
    }
  }
  ngOnInit() {
    this.init();
    this._us.logout();
  }


  register(){
    this._us.register(this.user,(data)=>{
      localStorage.setItem("user",data._id)
      this._router.navigate(['/dashboard']);
    });
  }
}
