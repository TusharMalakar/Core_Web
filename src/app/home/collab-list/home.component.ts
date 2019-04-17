import { FormControl } from '@angular/forms';
import { CollabsService } from './../../shared/dbAccess/collabs.service';
import { UserModel } from './../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/dbAccess/user.service';
import {Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CollabModel } from 'src/app/shared/models/collab.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userData: UserModel[];
    collabData: CollabModel[];
    selected = new FormControl(0);

  constructor(
      private userService : UserService,
      private router : Router, 
      private collabService : CollabsService)
       {
        
        }

  ngOnInit() {
    this.currentTab(0);
  }

  userDetails(){
    this.userService.getUserdetails().subscribe(userData => this.userData = userData);
  }
  
  userPicture(){
    ///user/profilePicture
    this.userService.getPicture().subscribe ((data : any ) => {
      // BitmapImage image = new BitmapImage();
      // image.SetSource(stream);  
     });
  }

  // return array of JSON OBJECTS
  collabDetails(){
    this.collabService.collabDetails().subscribe ((data : any ) => {
     });
  }
  

  activeCollabs(){
    this.collabService.activeCollabs().subscribe ((data : any ) => {
      //console.log(data);   
  
     });
  }

  myCollabs(){
    this.collabService.myCollabs().subscribe ((data : any ) => {
      //console.log(data);   
  
     });
  }

  async currentTab($event){
    switch($event) {

      case 0: {
        console.log("API called!")
        this.collabService.getCollabs("getAllCollabs").subscribe ((data : CollabModel[] )  => this.collabData = data);
        break;
      }

      case 1: {
        console.log("API called!")
        await this.collabService.getCollabs("getCollabDetails").subscribe ((data : CollabModel[] )  => this.collabData = data);
        break;
      }

      case 2: {

        break;
      }

      default: {

        break;
      }


    }
  }

  createCollab(){
    this.collabService.CreateCollab("", 29, [], 4/13/2019, 5, "rego park", true, "test","test", ["test", "test2"],["test","test"], ["test", 'test2'])
  }


}

