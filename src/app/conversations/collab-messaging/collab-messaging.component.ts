import { GroupMessagingModel } from './../../shared/models/groupMessaging';
import { UserService } from './../../shared/dbAccess/user.service';
import { ConversationModel } from './../../shared/models/conversation.model';
import { Message } from './../../shared/models/message.model';
import { CollabModel } from './../../shared/models/collab.model';
import { UserModel } from './../../shared/models/user.model';
import { ConversationService } from './../../shared/dbAccess/conversation.service';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormBuilder,FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import * as wsockjs from './../../include/websock';
import * as utiljs from './../../include/util';



@Component({
  selector: 'app-collab-messaging',
  templateUrl: './collab-messaging.component.html',
  styleUrls: ['./collab-messaging.component.css']
})
export class CollabMessagingComponent implements OnInit {
  
  public messages: Message[];

  form: FormGroup
  convoIdent: String;
  user: String;
  messageInput: string;
  //Will hold our user data.
  userData: UserModel[];
  private static audioContext: AudioContext;
  
  constructor(private userService : UserService, private collabservice: CollabsService, 
    private conversation: ConversationService,private router: Router,
    private userservie:UserService,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
     }
  
  async ngOnInit() {
    this.userservie.getUserdetails().subscribe((data:any)=>{
      this.user = data.username;
    })
    //Will retrieve the 'username' parameter from the url if set.
    await this.activeRoute.paramMap
    .subscribe(params => {
      this.convoIdent = params.get('unameOrCollabId');
      this.getMessages();
      setTimeout(function(){ 
                      (<any>window).connect(localStorage.getItem('accessToken'));
              }, 2000);
      
              setInterval(()=> { this.loopPingCheck() }, 1 * 1000);
    })

    
    this.userservie.getUserdetails().subscribe((data:any)=>{
      this.user = data.username;
      //console.log(this.user)
    })

      

  
    
  }

  loopPingCheck() {
    if ((<any>window).PingReceived) {
      (<any>window).PingReceived = false;
      console.log("Angular Detected Ping Receive, getting new messages.");
      this.getMessages();
    } else {
      //console.log("Nope");
    }
  }

  getMessages() {
    if(this.convoIdent.indexOf('@myhunter.cuny.edu') != -1){
    
      this.conversation.getMessages(this.convoIdent, false).subscribe((data:any)=>{
        this.messages = data[0].messages.reverse();
        
        console.log(this.messages)
      });
    } else {

      this.conversation.getMessages(this.convoIdent, true).subscribe((data:any)=>{
        this.messages = data[0].messages.reverse();
        console.log(this.messages)
      });
    }
  }

  sendMessage() {
    console.log("Sending message : " + this.messageInput);

    if(this.convoIdent.indexOf('@myhunter.cuny.edu') != -1){
      this.conversation.sendPersonalMessage(this.messageInput, this.convoIdent).subscribe((data:any) =>{
        console.log(data);
        //this.getMessages();
      });
    } else {
      this.conversation.sendMessageToCollabGroup(this.messageInput, this.convoIdent).subscribe((data:any) =>{
        console.log(data);
        //this.getMessages();
      });
    }
  }

 
  
/*

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

*/
}
