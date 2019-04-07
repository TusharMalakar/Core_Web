
import { User } from './../shared/user.model';
import { TokenParams } from './../shared/TokenPrarms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {Router } from '@angular/router';
import {DropdownModule} from "ngx-dropdown";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
    [x: string]: any;

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    

    
  }

  userDetails() {
    this.userService.getUserdetails().subscribe ((data : any ) => {
      //setter 
       this.username = "Email : "+ data.username;
       this.github = data.github;
       this.linkedin = data.linkedin;
       this.skills =  "Skills : "+data.skills;
       this.classes = "Classes : "+data.classes;
       this.name = data.name;

     });
  }
  
  userPicture(){
    ///user/profilePicture
    this.userService.getPicture().subscribe ((data : any ) => {
      // BitmapImage image = new BitmapImage();
      // image.SetSource(stream);  
     });
  }

  //user/skills
  userSkill(){
    this.userService.getSkill().subscribe ((data : any ) => {
      console.log(data);   
  
     });
  }
  userClass(){
    this.userService.getClasses().subscribe ((data : any ) => {
      console.log(data);   
  
     });
  }
  searchSkill(){
    this.userService.getSkill().subscribe((data : any ) => {
      console.log(data);   
  
     });
  }

  // return array of JSON OBJECTS
  collabDetails(){
    this.userService.collabDetails().subscribe ((data : any ) => {

       // console.log(data[0].owner)
      //write a for loop to inter arrar
        var i : number;
        var length_ = data.length;
       for( i  = 0 ; data.length ; i ++){
        // console.log(data[i].owner)
        // console.log(data[i].size)
        // console.log(data[i].members) 
        // console.log(data[i].date)
        // console.log(data[i].duration)
        // console.log(data[i].location)
        // console.log(data[i].status)
        // console.log(data[i].description)
        // console.log(data[i].Classes)
        // console.log(data[i].skills)
        // console.log(data[i].applicants)
       this.owner = data[i].owner
       this.size = data[i].size
       this.members = data[i].member
       this.date   = data[i].date 
       this.duration =  data[i].duration
       this.location = data[i].location
       this.status = data[i].status
       this.title = data[i].title
       this.description = data[i].description
       this.classes = data[i].classes
       this.skills = data[i].skills
       this.applicants = data[i].applicants
        
       }
       this.Collabs = data;
       
         
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

    //collabs details
       private id : []
       private owner : []
       private size : []
       private members : []
       private date : []
       private duration : []
       private location : []
       private status : []
       private title : []
       private description : []
       //private classes
       //private skills
       private applicants : []
        
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


export class Collabs {
    
    id : any
    owner : any
    size : any
    members : any
    date : any
    duration : any
    location : any
    status : any
    title : any
    description : any
    classes : any
    skills : any
    applicants : any
   
}
 