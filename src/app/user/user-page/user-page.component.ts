import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userData: UserModel[];

  constructor(private userService : UserService,private router : Router)
   { 
    this.userService.getUserdetails().subscribe(userData => this.userData = userData);
   }

  ngOnInit() {
    
  }
}
