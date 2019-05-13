import { CollabModel } from 'src/app/shared/models/collab.model';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { ConversationModel } from '../../shared/models/conversation.model';
import { GroupMessagingModel } from './../../shared/models/groupMessaging';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { Message } from 'src/app/shared/models/message.model';
import { UserModel } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  
  //place holder for myCollabs
  public gropuMess : GroupMessagingModel[] = new Array();
  public ContactList   : string[] = new Array();
  public user : string = null;
  public avaterArray : any[];
  public imageToShow :any;
  public mem : string;


  //messaing variable
  collabData : CollabModel;
  public sender : Message["sender"];
  userdata : UserModel;
  public collabId: string;
  public Title_ : string;
  public convos: ConversationModel[];

  constructor(private collab: CollabsService,
              private userservice : UserService,
              private router :Router
    ) { }

  ngOnInit() {

    this.collab.collabDetails().subscribe((collab:CollabModel)=>{
      this.collabData= collab;
      console.log(collab)
    });
    
    this.userservice.getUserdetails().subscribe((data:any)=>{
      this.user=data.username
      });
      
    this.userservice.getConversations().subscribe(convers => this.convos = convers);
    
  }
  
  gotoConvo(convo: ConversationModel) {
    if (convo.otherUser) {
      console.log("Goto personal convo: " + convo.otherUser);
      this.router.navigate(['/conversations/message/', convo.otherUser]);
    } else {
      console.log("Goto collab convo: " + convo._id.$oid);
      this.router.navigate(['/conversations/message/', convo._id.$oid]);
    }
  }
//remove duplicate contact
remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}
extractFirstNameAndLastName(username:string){
  let temp = username.split("@")
  return temp[0]
}


groupMessageingPageLink(id:string){
    //setting collabId 
    this.collabId=id;
    //making member to null, which is parameter of personal message before switching to group messaging
    this.mem=null;
    console.log("Going to Group message "+this.collabId)
    console.log("member "+this.mem)
    
    this.router.navigateByUrl("/conversations")
}


PersonalmessagePageLink(mem:string){
    //setting members of message
    this.mem=mem
    //making collabId null before switching to personal messaging
    this.collabId=null;
    console.log("Going to message page of "+this.mem)
    console.log("CollabId "+this.collabId)
    //location.reload();

    // editCollab(){
   
    //   this.router.navigate(['/home/editcollab/',this.collabData._id["$oid"]]);
    // }
    
    this.router.navigateByUrl("/conversations")
}


getTitle(title:string){
    this.Title_ = title;
    console.log("Showing title "+this.Title_)
}

//write a sort fun to sort contact by time before display



}
