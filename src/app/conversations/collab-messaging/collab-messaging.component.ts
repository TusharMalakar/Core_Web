import { OneToOneMessagingModel } from './../../shared/models/oneToOneMessagingModel';
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
import { GroupMessagingModel } from 'src/app/shared/models/groupMessaging';


@Component({
  selector: 'app-collab-messaging',
  templateUrl: './collab-messaging.component.html',
  styleUrls: ['./collab-messaging.component.css']
})
export class CollabMessagingComponent implements OnInit {

  collabData: CollabModel;
  collabMem:CollabModel["members"]
  member : string;
  message : Message;
  mess:any []=new Array();
  collabID : string;
  Title_ : string;
  sender : string= this.mem_.sender;
  

  public allMess:OneToOneMessagingModel["messages"][]=new Array();
  public OneToOneMess:OneToOneMessagingModel["messages"][]=new Array();
  public OneToOneDate:OneToOneMessagingModel["messages"][]=new Array();
  public OneToOneDisName:OneToOneMessagingModel["messages"][]=new Array();

  public groupmess:GroupMessagingModel["messages"][]=new Array();
  public alldata :any[]=new Array();
  
  partOf = false; 
  isOwner = false; 
  form: FormGroup
  public date = new Date();
  
  
  //Will hold our user data.
  userData: UserModel[];
  
  constructor(private userService : UserService, private collabservice: CollabsService, 
    private conversation: ConversationService,private router: Router, 
    private mem_:NavbarComponent,
    private collabSer : CollabsService,
    private formBuilder: FormBuilder) {
    this.message = new Message();
     }
  
  ngOnInit() {
    this.form = this.formBuilder.group({ message:[this.message.message, Validators.required]});
    this.LoadMyMessages();
    
  }
  

  //spliting username by @ 
  getName(username:string){
    var temp = username.substring(0,2).toUpperCase()
    return temp
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

//based on user input e.g. collbId od individual, it will load messages
LoadMyMessages(){
  if(this.mem_.mem !=null){
    //this.showTitle();
    
    this.LoadIndividualMessage();
  }
  else if(this.mem_.collabId != null){
    //this.showTitle();
    this.LoadGroupMessage();
  }
  else
    this.router.navigate(['/home'])

}
 
//return participients and messages of current user
LoadIndividualMessage(){
  this.sender=this.mem_.sender;
  for(let k=0; k<4; k++){ //user can loading last 200 messages
    this.conversation.LoadOtherUserMessage(k,this.sender).subscribe((message:any)=>{
      for(let i=0; i<message.length;i++){
      
        this.alldata=message[i];
        //console.log(message)
        for(let j=0; j<message[i].messages.length;j++){
          this.OneToOneMess.push(message[i].messages[j]); 
          this.OneToOneMess.reverse();
        }     
      }
    })
  }
  

}

testOne(){
  console.log(this.OneToOneMess)
}
//return  collabId and  group messages of current user 
LoadGroupMessage(){
  this.collabID=this.mem_.collabId;
  
  for(let j=0;j<4; j++){//user can loading last 200 messages
    this.conversation.LoadGroupMessage(j,this.collabID).subscribe((message:any)=>{
      this.Title_=this.mem_.Title_
      for(let i=0; i<message.length;i++){
        this.groupmess=message[i].messages
        this.groupmess.reverse();
      }
      //console.log(this.Title_)
      //console.log(this.groupmess)
      
    })
  }
}

//need to write the fuc: it will take a username and will check if username is part of participantats
isPartof(username:string , participantats :string[]){
  for(let i=0; i<participantats.length; i++){
    if(participantats[i]==username){
      return true
    }
    else  
        return false;
  }
}



}
