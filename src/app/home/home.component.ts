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

  userDetails(){
    this.userService.getUserdetails().subscribe((data : any) => {
      this.userDetails = data;
    } )
  }

    logOut(){
      localStorage.removeItem('userToken');
      this.router.navigate(['/login']);
    }
}
