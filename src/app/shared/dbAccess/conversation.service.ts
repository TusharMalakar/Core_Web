import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollabModel } from '../models/collab.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient) { }
  

  sendMessageToGroup(){

  }

  sendPersonalMessage(){
    const body ={
      "message":  "this is an test form webApp",
      "recipient": "testuser99@myhunter.cuny.edu"
    }
    return this.http.post(this.rootUrl+"/messaging/sendMessage",body)

  }




}
