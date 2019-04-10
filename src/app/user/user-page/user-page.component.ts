import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/shared/models/user.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userData: UserModel[];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private userService : UserService,private router : Router)
   { 
    this.userService.getUserdetails().subscribe(userData => this.userData = userData);

   }

  ngOnInit() {
    
  }
}
