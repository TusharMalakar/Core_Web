import { UserService } from './../shared/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component , OnInit} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Router } from '@angular/router';

@Component({

  selector: 'app-name-editor',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})


export class LoginComponent implements OnInit {

  
  ngOnInit(): void {}
  
  isLoginError : boolean = false;
  constructor(private fb: FormBuilder,private userService : UserService,private router : Router) { }

  loginForm : FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  

  onSubmit(username,password) {
    this.userService.userAuthentication(username,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.success);
      localStorage.setItem('token',data.token);

      if(data.success == true){

        this.router.navigate(['/home']);
        console.log ( username + "logged in");
        
        console.log("Token =  "+data.token);
        
      }
      else{console.log ("error "+data.error)};
      
    });
    
  }

  


}
