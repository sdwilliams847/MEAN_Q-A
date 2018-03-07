import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class QuestionService {

  constructor(private _http:HttpClient) { }

  findOne(id,cb){
    this._http.get('/server/questions/show/'+id)
    .subscribe(
      data=>cb(data),
      err=>(err)
    );
  }
  all(cb){
    this._http.get('/server/questions/all')
    .subscribe(data=>cb(data));
  }

  createQuestion(question,cb){
    this._http.post('/server/questions/create',question)
    .subscribe(
      data=>cb(data),
      err=>(err)
    );
  }

//**************************************************//

  findAnswer(id,cb){
    this._http.get('/server/answers/show/'+id)
    .subscribe( 
      data=>cb(data),
      err=>(err)
    );
  }

  createAnswer(answer,cb){
    console.log("QA Service RECEIVED ANSWER: "+ answer)
    this._http.post('/server/answers/create',answer)
    .subscribe(
      data=>cb(data),
      err=>(err)
    );
  }

  allAns(cb){
    this._http.get('/server/answers/all')
    .subscribe(data=>cb(data));
  }

  getQandA(question_id,cb){
    this._http.get('/server/answers/getqanda/'+question_id)
    .subscribe( 
      data=>cb(data),
      err=>(err)
    );
  }

  like(id,cb){
    this._http.get('/server/answers/like/'+id)
      .subscribe( 
        data=>cb(data),
        err=>(err)
      );
  }
}
