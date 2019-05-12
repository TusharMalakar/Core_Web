import { GroupMessagingModel } from './../shared/models/groupMessaging';
import { Message } from './../shared/models/message.model';
import { UserModel } from './../shared/models/user.model';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollabModel } from '../shared/models/collab.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  collabData : CollabModel;
  imageToShow:any;
  panelOpenState = false;
  public mem:string = null
  public sender : Message["sender"];
  userdata : UserModel;
  public collabId: string;
  public Title_ : string;

  //place holder for myCollabs
  public gropuMess : GroupMessagingModel[] = new Array();
  public ContactList   : string[] = new Array();
  
  
  constructor(private router: Router, 
              private collabService : CollabsService, 
              private userservice: UserService) { }

  ngOnInit() {
    this.collabService.collabDetails().subscribe((collab:CollabModel)=>{
      this.collabData= collab;
      console.log(collab)
    });
    this.userservice.getUserdetails().subscribe((data:any)=>{
        this.userdata=data;
        this.sender=this.userdata.username
    })
    this.collabService.myCollabs().subscribe((data:any)=>{
      console.log(data);
      for(let i=0; i<data.length;i++){
        if(data[i]._id != null && data[i]._id["$oid"]!=null){
          console.log(data[i]._id["$oid"])
          console.log(data[i].title)
          this.gropuMess.push(data[i]);
        
        }

        //making a personal contact-list
        else if(data[i].participants.length != 0 && data[i].messages.length>0){
          console.log(data[i].participants)
          for(let item=0; item<data[i].participants.length; item++){
            //removing user-himself from contact list
            if(data[i].participants[item] != this.user){
              this.ContactList.push(data[i].participants[item]);
            } 
          } 
          //remove duplicate if any exist
          this.ContactList=this.remove_duplicates(this.ContactList) 
          //console.log(this.ContactList) 
        }
        else
          return 0;
      }
    })
  }
extractFirstNameAndLastName(username:string){
  let temp = username.split("@")
  return temp[0]
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
  
GoToHomePage(id:string){
  this.collabId=id;
  console.log("Going to Collab page of "+this.collabId)
  this.router.navigate(['/home'])
}


GoToProfile(mem_:any){
  this.mem=mem_
  console.log("Going to profile page of "+this.mem)
  this.router.navigate(['/user'])
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
  this.router.navigateByUrl("/conversations")
}


getTitle(title:string){
  this.Title_ = title;
  console.log("Showing title "+this.Title_)
}

home(){
  this.router.navigate(['/home']);
}
user(mem){
  this.router.navigate(['/user/'+mem]);
}

logOut(){
  localStorage.removeItem('accessToken');
  this.router.navigate(['/login']);
} 

}
