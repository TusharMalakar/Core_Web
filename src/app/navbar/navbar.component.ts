import { Message } from 'src/app/shared/models/message.model';
import { UserModel } from './../shared/models/user.model';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
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
  
  constructor(private router: Router, private collabService : CollabsService, private userservice: UserService) { }

  ngOnInit() {
    this.collabService.collabDetails().subscribe((collab:CollabModel)=>{
      this.collabData= collab;
      console.log(collab)
    });
    this.userservice.getUserdetails().subscribe((data:any)=>{
        this.userdata=data;
        this.sender=this.userdata.username
    })
  }
extractFirstNameAndLastName(username:string){
  let temp = username.split("@")
  return temp[0]
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
    this.collabId=id;
    console.log("Going to Group message "+this.collabId)
    this.router.navigate(['/home/message'])
}
PersonalmessagePageLink(mem:string){
  this.mem=mem
  console.log("Going to message page of "+this.mem)
  this.router.navigate(['/home/message'])
}
getTitle(title:string){
  this.Title_ = title;
  console.log("Showing title "+this.Title_)
}
logOut(){
  localStorage.removeItem('accessToken');
  this.router.navigate(['/login']);
}

  

}

