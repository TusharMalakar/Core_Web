import { CollabsService } from './../../shared/dbAccess/collabs.service';
import { UserService } from '../../shared/dbAccess/user.service';
import { Component , OnInit} from '@angular/core';
import {Router } from '@angular/router';
import { RegisterModel } from '../../shared/models/register.model';

//Needed to implement Reactive Forms
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  user: RegisterModel;
  form: FormGroup;

  isRegiError : boolean;
  constructor(
    private collabService : CollabsService,
    private userService : UserService,
    private router : Router,
    private formBuilder: FormBuilder) 
    {
      this.user = new RegisterModel();
     }

  ngOnInit() {
    this.form = this.formBuilder.group({
       username: [this.user.username, [
        Validators.required
      ]],
       password: [this.user.password, [
        Validators.required,
        Validators.minLength(6)
      ]], 
       password2: [this.user.password2, [
        Validators.required,
        Validators.minLength(6)
      ]] 

    });
    }
  
  onSubmit() {

    this.user = Object.assign({}, this.form.value);
    
    if(this.user.password != this.user.password2){
      alert("Password did not matche!");
    }
    else
    {
      this.userService.registerUser(this.user.username , this.user.password)
      .subscribe((data: any)  =>{
            console.log ( data );
            //storing json object to localStorage
            localStorage.setItem('accessToken',data.token);

            if(data.success){

              this.router.navigate(['/home']);
              console.log ( this.user.username + " registered"); 
            }
            else{ 
                alert(data.error);
                this.router.navigate(['/register']);
            };
        });
    }
}

createCollab(){
  this.collabService.CreateCollab("", 29, [], 4/13/2019, 5, "rego park", true, "test","test", ["test", "test2"],["test","test"], ["test", 'test2'])
}
//not implemented yet
recomendedCollab(){
  this.collabService.recomendedCollab(["c"],["r"]).subscribe(data =>
    console.log(data))
}
///user
updateuser(){
  this.collabService.updateUser("www.mygithub.com","www.mylimkedin.com",["c","R"], ["none"]).subscribe(
    data => console.log(data)
  )
}
//sendmessage
sendMessage(){
  this.collabService.sendMessage("what's up ", "jane.doe99@myhunter.cuny.edu")
}
//join collab
join(){
  this.collabService.joinCollab("5ca826e6e1fe6800040efb49","new-user")
}

//leave a collab by id
leave(){
  this.collabService.leaveCollab("5ca826e6e1fe6800040efb49","new-user")
}

updateSkills(){
  this.userService.updateSkill("new-skill");
}



get username(){
  return this.form.get('username');
}

get password(){
  return this.form.get('password');
}

get password2(){
  return this.form.get('password2');
}



}