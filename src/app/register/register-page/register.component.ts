import { CollabModel } from 'src/app/shared/models/collab.model';
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


get username(){
  return this.form.get('username');
}

get password(){
  return this.form.get('password');
}

get password2(){
  return this.form.get('password2');
}


createCollab(){
  this.collabService.CreateCollab("", 29, [], 4/13/2019, 5, "rego park", true, "test","test", ["test", "test2"],["test","test"], ["test", 'test2'])
}

//updateUserProfile(github,linkedin, skills, classes)
updateUser(){
  this.userService.updateUserProfile("myGit", "myLinkedIn",["c","r","new"], ["e"]).subscribe(
    data => console.log(data));
}


updateSkills(){
  this.userService.updateUserSkill(["c","rNew","new","t"]).subscribe(
    data => console.log(data));
}



//not implemented yet--------------------------------------

addSkills(){
  return
}
addClasses(){
  return
}



recomendedCollab(){
  this.collabService.recomendedCollab(["c"],["r"]).subscribe(data =>
    console.log(data))
}
//sendmessage
sendMessage(){
  this.collabService.sendMessage("what's up ", "jane.doe99@myhunter.cuny.edu")
}

//Convert Bolb file into picture
imageToShow: any;
createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}
//picture is ready to display
//isImageLoading : boolean;
getImageFromService() {
  //this.isImageLoading = true;
  this.userService.getPicture().subscribe(data => {
     this.createImageFromBlob(data);
     //return myPicture;
    //this.isImageLoading = false;
    //console.log(data)
  })
}


}