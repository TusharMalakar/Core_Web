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
    myCollabData : CollabModel[];

  constructor(
      private userService : UserService,
      private router : Router, 
      private collabService : CollabsService)
       {
        this.collabService.allCollabs().subscribe ((data : CollabModel[] )  => this.collabData = data);
        //this.collabService.myCollabs().subscribe ((data : CollabModel[])  =>this.myCollabData = data);
        this.collabService.myCollabs().subscribe(data => console.log(data) )
        }

ngOnInit() {}

userDetails(){
    this.userService.getUserdetails().subscribe(userData => this.userData = userData);
}
  
// return array of JSON OBJECTS
collabDetails(){
    this.collabService.collabDetails().subscribe ((data : any ) => {
      console.log(data[0].owner);
      console.log(data[0].members);
     });
}
  
activeCollabs(){
    this.collabService.activeCollabs().subscribe ((data : any ) => {
      console.log(data);   
     });
  }

myCollabs(){
    this.collabService.myCollabs().subscribe ((data : any ) => {
      console.log(data);   
     });
  }
 
userPicture(){
    this.userService.getPicture().subscribe ((data : any ) => {
     });
  }


logOut(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
}



    //private data variables
    private username; 
    private github;
    private linkedin;
    private skills;
    private classes;
    private name; 

   
}
// testuser1@myhunter.cuny.edu
 


 