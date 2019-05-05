import { UserService } from 'src/app/shared/dbAccess/user.service';
import { OneToOneMessagingModel } from './../../shared/models/oneToOneMessagingModel';
import { GroupMessagingModel } from './../../shared/models/groupMessaging';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';
import { IgxBottomNavModule } from 'igniteui-angular';


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

  constructor(private collab: CollabsService,
              private userservice : UserService,
              private router :Router
    ) { }

  ngOnInit() {
    
    this.userservice.getUserdetails().subscribe((data:any)=>{
      this.user=data.username
      });

    this.collab.myCollabs().subscribe((data:any)=>{
      //console.log(data[1].participants[0]);
      for(let i=0; i<data.length-1;i++){
        if(data[i]._id != null && data[i]._id["$oid"]!=null){
          this.gropuMess.push(data[i]);
        }

        //making a personal contact-list
        else if(data[i].participants.length != 0 && data[i].messages.length>0){
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
PersonalmessagePageLink(contact){
  console.log(contact)
  this.mem=contact;
  this.router.navigate(['/conversations'])
}

//write a sort fun to sort contact by time before display



}
