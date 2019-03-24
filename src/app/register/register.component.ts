import { UserService } from './../shared/user.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component , OnInit} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Router } from '@angular/router';
import { User } from '../shared/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isRegiError : boolean = false;
  constructor(private fb: FormBuilder,private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  regiForm : FormGroup = this.fb.group({
    username: ['', Validators.required],
    password : ['', Validators.required],
    password2 : [' ',Validators.required],
   
  });
  
  onSubmit(username,password,password2) {

    console.log(username,password,password2);

    if(password != password2){
      console.log("Password did not matched!");
    }
    else
    {
      this.userService.registerUser(username,password)
      .subscribe((data: any)  =>{
  
  
        localStorage.setItem('userToken',data.access_token);
        this.router.navigate(['/home']);
  
        console.log ( username + "  you are registed!"),
        
      (err : HttpErrorResponse)=>{
        this.isRegiError = true;
      }
  
  
      });
    }

   
}
}