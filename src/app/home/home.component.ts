import { User, profile } from './../shared/user.model';
import { TokenParams } from './../shared/TokenPrarms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  collabDetails(){
    this.userService.collabDetails().subscribe ((data : any ) => {
      console.log(data);   
  
     });
  }
  AllCollabs(){
    this.userService.allCollabs().subscribe ((data : any ) => {
      console.log(data);   
  
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
      localStorage.removeItem('capstoneAuth');
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
 