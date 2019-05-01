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

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 
  collabData: CollabModel;
  collabMem:CollabModel["members"]
  message : Message;
  
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
    this.form = this.formBuilder.group({ message:[this.message.message, Validators.required]})
  }

  //spliting username by @ 
  getname(){
    let temp = this.mem_.mem.split("@" )
    return temp[0]
  }

  showMem(){
    if(this.mem_.mem==null){
      this.router.navigate(['/home'])
    }
    else
    return this.getname()
  }


  //sendPersonalMessage()
  sendPersonalMessage(){
    let message = this.form.value
    this.conversation.sendPersonalMessage(message,this.mem_.mem).subscribe(message=>console.log(message))      
}

//return all message of users: personal and group
mymessages(){
  this.conversation.myCoversations().subscribe((data:any)=>{
    console.log(data)
  })
}
 

}
