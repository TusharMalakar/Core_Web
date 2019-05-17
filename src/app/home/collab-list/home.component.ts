import { FormControl } from '@angular/forms';
import { CollabsService } from './../../shared/dbAccess/collabs.service';
import { UserModel } from './../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/dbAccess/user.service';
import {Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CollabModel } from 'src/app/shared/models/collab.model';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    //Data model for our user data
    userData: UserModel;
    //Array that will be used to hold our data and display it as it becomes available
    collabData: Observable<CollabModel[]>;
    //Will determine the current tab
    selected = new FormControl(0);
    //Keys for caching
    CACHE_KEY_0 =  'reqCollabsCache';
    CACHE_KEY_1 =  'activeCollabsCache';
    CACHE_KEY_2 = 'myCollabsCache';

  /**
  * @author Edwin Quintuna
  * 
  *	@brief Constructor that will create an instance of the HomeComponent 
  *        and allow us to inject our dependencies; services that will be needed in the component
  *
  *	@param[userService]   ,  service that will handle both retrival and updating user data via http requests
  *	@param[router]        ,  
  *	@param[collabService] ,  
  *	@return nothing
  */
  constructor(
      private userService : UserService,
      private router : Router, 
      private collabService : CollabsService)
       {
        this.userDetails();
        }

  ngOnInit() {
  }

  userDetails(){
    this.userService.getUserdetails().subscribe(userData => {
      this.userData = userData,
      this.currentTab(0);
    });
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

  createCollab(){
    this.router.navigate(['/home/createcollab']);
  }

  currentTab($event){
    switch($event) {

      case 0: {
        this.collabData = this.collabService.getReqCollabs(this.userData["classes"], this.userData["skills"])
        .pipe(
          map((data : CollabModel[] )  =>  data.reverse())
        )

        this.collabData.subscribe( next => {
          localStorage[this.CACHE_KEY_0]= JSON.stringify(next);
        });

        this.collabData = this.collabData.pipe(
          startWith(JSON.parse(localStorage[this.CACHE_KEY_1] || '{}'))
        )
        break;
      }

      case 1: {
        this.collabData = this.collabService.getCollabs("getActiveCollabs")
        .pipe(
          map((data : CollabModel[] )  =>  data.reverse())
        );
        
        this.collabData.subscribe( next => {
          localStorage[this.CACHE_KEY_2] = JSON.stringify(next);
        });

        this.collabData = this.collabData.pipe(
          startWith(JSON.parse(localStorage[this.CACHE_KEY_0] || '{}'))
        );
          
        break;
      }

      case 2: {
        this.collabData = this.collabService.getCollabs("getCollabDetails")
        .pipe(
          map((data : CollabModel[] )  =>  data.reverse())
        );

        this.collabData.subscribe( next => {
          localStorage[this.CACHE_KEY_1] = JSON.stringify(next);
        });

        this.collabData = this.collabData.pipe(
          startWith(JSON.parse(localStorage[this.CACHE_KEY_1] || '{}'))
        );
        
        break;
      }

      default: {

        break;
      }


    }
  }

  

}

