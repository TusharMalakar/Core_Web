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
      alert("Password did not matche!");
    }
    else
    {
      this.userService.registerUser(username,password)
      .subscribe((data: any)  =>{
  
            //storing json object to localStorage
            localStorage.setItem('capstoneAuth',data.token);

            if(data.success == true){

              this.router.navigate(['/home']);
              console.log ( username + " registered"); 
            }
            else{ 
                alert(data.error);
                this.router.navigate(['/register']);
            };
            return;
  
      } );
    }

   
}
}