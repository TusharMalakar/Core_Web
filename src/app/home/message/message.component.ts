import { CollabModel } from './../../shared/models/collab.model';
import { UserModel } from './../../shared/models/user.model';
import { ConversationService } from './../../shared/dbAccess/conversation.service';
import { TableBuilder } from 'src/app/shared/models/tableBuilder.model';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 
  collabData: CollabModel;
  collabMem:CollabModel["members"]
  
  partOf = false; 
  isOwner = false; 
  
  //Will hold our user data.
  userData: UserModel[];
  
  constructor(private userService : UserService, private collabservice: CollabsService, private conversation: ConversationService) { }

  
  
  async ngOnInit() {
      this.setCollabData();
      //this.mymessages();
      
    }




isPartOf(){
  for(let member of this.collabData.members){
    if(member == this.userData['username']){
      this.partOf = true;
    } 
  }

  console.log(this.partOf);
}


setCollabData(){this.collabservice.collabDetails().subscribe((data:CollabModel)=>{
  this.collabData=data;
  console.log(data)  
})}



//   //sendPersonalMessage()
// sendPersonalMessage(){
//   var member = this.collabData
//   console.log(this.collabData._id)
//   //this.conversation.sendPersonalMessage().subscribe(message=>console.log(message))
// }

// //return all message of users: personal and group
// mymessages(){
//   this.conversation.myCoversations().subscribe((data:any)=>{
//     console.log(data)
//   })
// }
 

}
