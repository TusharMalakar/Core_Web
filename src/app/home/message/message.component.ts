import { CollabModel } from './../../shared/models/collab.model';
import { UserModel } from './../../shared/models/user.model';
import { ConversationService } from './../../shared/dbAccess/conversation.service';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private CollabData : CollabModel;
  //Will hold our user data.
  userData: UserModel[];

  constructor(private userService : UserService, private collabservice: CollabsService, private conversation: ConversationService) { }

  collabData: CollabModel;  
  partOf = false; 
  isOwner = false;


  
  async ngOnInit() {
    await this.userService.getUserdetails().subscribe(userData => this.userData = userData)
      this.mymessages();
      
    }



isPartOf(){
  for(let member of this.collabData.members){
    if(member == this.userData['username']){
      this.partOf = true;
      console.log(this.partOf)
      return this.partOf
    } 
  }
}



  //sendPersonalMessage()
sendPersonalMessage(){
  var member = this.CollabData["members"]
  //console.log(member)
  //this.conversation.sendPersonalMessage().subscribe(message=>console.log(message))
}

//return all message of users: personal and group
mymessages(){
  this.conversation.myCoversations().subscribe((data:any)=>{
    console.log(data)
  })
}
}
