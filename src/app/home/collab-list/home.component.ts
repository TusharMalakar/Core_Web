import { UserModel } from './../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/dbAccess/user.service';
import {Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userData: UserModel[];

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    this.userDetails();
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
    this.userService.collabDetails().subscribe ((data : any ) => {
      console.log(data[0].owner);
      console.log(data[0].members);

      //write a for loop to inter arrar
    
      //for(int i = 0 ; data.length ; i ++){
            /**
       * id = data[i].owner
       * owner = data[i].
       * size = data[i]
       * members = data[i]
       * date   = data[i] 
       * duration =  data[i]
       * location = data[i]
       * status = data[i]
       * title = data[i]
       * description = data[i]
       * classes = data[i]
       * skills = data[i]
       * applicants = data[i]
       *  */  
      //}
      
      
  
     });
  }
  AllCollabs(){
    this.userService.allCollabs().subscribe ((data : any ) => {
      console.log(data);  
      /**
       * id
       * owner
       * size
       * members
       * date
       * duration
       * location
       * status
       * title
       * description
       * classes
       * skills
       * applicants
       *  */ 
  
     });
  }

  activeCollabs(){
    this.userService.activeCollabs().subscribe ((data : any ) => {
      console.log(data);   
  
     });
  }

  myCollabs(){
    this.userService.myCollabs().subscribe ((data : any ) => {
      console.log(data);   
  
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

    /**
       * id
       * owner
       * size
       * members
       * date
       * duration
       * location
       * status
       * title
       * description
       * classes
       * skills
       * applicants
       *  */ 
}
// testuser1@myhunter.cuny.edu
 


  [
    {
        "_id": {
            "$oid": "5ca82697e1fe6800040efb48"
        },
        "owner": "testuser1@myhunter.cuny.edu",
        "size": 5,
        "members": [
            "testuser1@myhunter.cuny.edu",
            "testuser99@myhunter.cuny.edu",
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1560465000955,
        "duration": 259200000,
        "location": "MLH NYC Headquarters",
        "status": true,
        "title": "MLH Hackathon",
        "description": "looking for 4 more people to attend hackathon as a group",
        "classes": [
            "Any"
        ],
        "skills": [
            "C++",
            "Java",
            "Python",
            "Firebase"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca826e6e1fe6800040efb49"
        },
        "owner": "jane.doe99@myhunter.cuny.edu",
        "size": 6,
        "members": [
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu",
            "testuser1@myhunter.cuny.edu"
        ],
        "date": 1555171800432,
        "duration": 5184000000,
        "location": "Anywhere",
        "status": true,
        "title": "Web App for Portfolio",
        "description": "looking to discuss/build a web app for a portfolio",
        "classes": [
            "CS 335",
            "Practical Web Development"
        ],
        "skills": [
            "C++",
            "Python",
            "Java",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82726e1fe6800040efb4a"
        },
        "owner": "testuser1@myhunter.cuny.edu",
        "size": 30,
        "members": [
            "testuser1@myhunter.cuny.edu",
            "testuser99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1557939600823,
        "duration": 345600000,
        "location": "Hunter 6th Floor Library",
        "status": true,
        "title": "CS 235 section 3 Final review",
        "description": "study for finals exam, all are welcome",
        "classes": [
            "CS 235"
        ],
        "skills": [
            "C++"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82761e1fe6800040efb4b"
        },
        "owner": "jane.doe99@myhunter.cuny.edu",
        "size": 20,
        "members": [
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu",
            "testuser1@myhunter.cuny.edu"
        ],
        "date": 1555018200807,
        "duration": 7776000000,
        "location": "Hunter North 10th floor, walk towards the labs and make a right",
        "status": true,
        "title": "Hunter ASM Weekly Meeting",
        "description": "come join fellow CS students for weekly meetings from 5:30 PM to 7:30 PM",
        "classes": [
            "Any"
        ],
        "skills": [
            "Any"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca827c2e1fe6800040efb4c"
        },
        "owner": "testuser99@myhunter.cuny.edu",
        "size": 4,
        "members": [
            "testuser99@myhunter.cuny.edu",
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1557271500378,
        "duration": 259200000,
        "location": "127 Madison Avenue",
        "status": true,
        "title": "Intro to Python meetup",
        "description": "looking for smal group of people to attend a Python intro meetup",
        "classes": [
            "Any"
        ],
        "skills": [
            "Any"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82c35e1fe6800040efb4f"
        },
        "owner": "frank.white@myhunter.cuny.edu",
        "size": 1,
        "members": [
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1554546780684,
        "duration": 3801600000,
        "location": "test",
        "status": true,
        "title": "test edits",
        "description": "test",
        "classes": [
            "123"
        ],
        "skills": [
            "123"
        ],
        "applicants": []
    }
]
