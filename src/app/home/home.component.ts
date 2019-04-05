import { User } from './../shared/user.model';
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
      console.log(data);     
     });
  }


  // userPicture(){
  //   ///user/profilePicture
  //   this.userService.getPicture().subscribe ((data : any ) => {
  //     console.log(data);   
  //    });
  // }

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
}
// testuser1@myhunter.cuny.edu
