import { Message } from './../../shared/models/message.model';
import { CollabModel } from './../../shared/models/collab.model';
import { UserModel } from './../../shared/models/user.model';
import { ConversationService } from './../../shared/dbAccess/conversation.service';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { Router } from '@angular/router';
import {  FormBuilder,FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 
  collabData: CollabModel;
  collabMem:CollabModel["members"]
  member : string;
  message : Message;
  collabID : string;
  Title_ : string;
  sender : string= this.mem_.sender;
  
  partOf = false; 
  isOwner = false; 
  form: FormGroup
  
  
  //Will hold our user data.
  userData: UserModel[];
  
  constructor(private userService : UserService, private collabservice: CollabsService, 
    private conversation: ConversationService,private router: Router, 
    private mem_:NavbarComponent,private formBuilder: FormBuilder) {
      this.message = new Message();
     }
  
  ngOnInit() {
    this.form = this.formBuilder.group({ message:[this.message.message, Validators.required]});
  }

  //spliting username by @ 
  getName(username:string){
    var temp = username.substring(0,2).toUpperCase()
    return temp
  }

 //Display a title
  showTitle(){
    if(this.mem_.mem !=null){
      return this.getName(this.mem_.mem)  
    }
    else if(this.mem_.collabId != null){
      return this.mem_.Title_
    }
    else
    this.router.navigate(['/home'])
    
  }
  //send message
  SendMessage(){
    if(this.mem_.mem !=null){
      console.log("sending message to "+this.mem_.mem)
      this.sendPersonalMessage();  
    }
    else if(this.mem_.collabId != null){
      console.log("sending message to "+this.mem_.collabId)
      this.SendGroupMessage();
    }
    else
    this.router.navigate(['/home'])
  }

  //sendPersonalMessage()
  sendPersonalMessage(){
    let message = this.form.value
    this.conversation.sendPersonalMessage(message,this.mem_.mem).subscribe(message=>console.log(message))      
  }
  //sendGroud message to collab members
  SendGroupMessage(){
    let message = this.form.value;
    this.conversation.sendMessageToCollabGroup(message,this.mem_.collabId).subscribe(message=>console.log(message))
  }

//return all message of users: personal and group
mymessages(){
  this.conversation.myCoversations().subscribe((data:any)=>{console.log(data)})
}
 

}
