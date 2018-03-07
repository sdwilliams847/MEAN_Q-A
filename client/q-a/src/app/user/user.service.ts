import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private _http:HttpClient) { }

  register(user,cb){
    this._http.post('/server/users/register',user)
    .subscribe(data=>cb(data));
  }

  findOne(cb){
    this._http.get('/server/users/find')
    .subscribe(
      data=>cb(data),
      err=>(err)
    );
  }

  all(cb){
    this._http.get('/server/users/all')
    .subscribe(
      data=>cb(data),
      err=>(err)
    );
  }
  
  logout(){
    localStorage.setItem("user","undefined");
  }

  isValid(){
    return localStorage.getItem("user") != "undefined";
  }

  session(){
    return localStorage.getItem("user");
  }
}