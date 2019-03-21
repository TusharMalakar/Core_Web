import { UserService } from './../shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component , OnInit} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoginError : boolean = false;
  constructor(private fb: FormBuilder,private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  regiForm : FormGroup = this.fb.group({
    email: ['', Validators.required],
    password1 : ['', Validators.required],
    password2 : ['', Validators.required],
  });

  onSubmit(email,password) {
    
    
  } 

}
