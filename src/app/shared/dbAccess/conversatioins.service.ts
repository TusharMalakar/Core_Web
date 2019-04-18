import { MessageModel } from './../models/messageModel';
import { UserModel } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTabBodyPortal } from '@angular/material/tabs';

@Injectable({
  providedIn: 'root'
})
export class ConversatioinsService {
  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http : HttpClient) { }
  getUser(){

  }

 //Returns a list of conversations with only the list of participants. 
 myConvos(){
   return this.http.get(this.rootUrl+"/messaging/myConvos").subscribe(UserData => 
      this.USER=UserData)
 }

 //Requires a JSON object with "message", “recipients”
 sendMessage_(messsage, recipients){
    const body : MessageModel ={
      message : messsage,
      recipient : recipients
    }
    return this.http.post(this.rootUrl+"/messaging/sendMessage", body)
 }

//Requires a JSON object with "page", “participants”
getMessages(){
  const body : MessageModel={
    participants : this.USER,
    page         : 0
  }
  return this.http.post(this.rootUrl+"/messaging/getMessages",body)
}


private USER 
private PARTICIPANTS


}


