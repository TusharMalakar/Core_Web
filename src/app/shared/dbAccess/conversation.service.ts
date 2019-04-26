import { Message } from './../models/message.model';
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
  
  //send group message to collab group
  sendMessageToCollabGroup(message , collabID){
    const body : Message ={
      message   : message,
      collabId  : collabID
    }
    return this.http.post(this.rootUrl+"/messaging/sendMessage",body)
  }

  //send personal message to collab members
  sendPersonalMessage( message , recipient){
    const body : Message ={
      message   : message,
      recipient : recipient
    }
    return this.http.post(this.rootUrl+"/messaging/sendMessage",body)

  }

  //return current user conversations
  myCoversations(){ 
    return this.http.get( this.rootUrl +"/messaging/myConvos");
  }




}
