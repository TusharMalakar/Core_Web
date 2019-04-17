import { UserModel } from './../../shared/models/user.model';
import { CollabModel } from 'src/app/shared/models/collab.model';
import { CollabsService } from './../../shared/dbAccess/collabs.service';
import { UserService } from '../../shared/dbAccess/user.service';
import { Component , OnInit} from '@angular/core';
import {Router } from '@angular/router';
import { RegisterModel } from '../../shared/models/register.model';

//Needed to implement Reactive Forms
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { concat } from 'rxjs';

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
       username: this.user.username
    });
   
    
    }
    getUserDetails(){
      this.userService.updateSkill()
      console.log(this.userService.skill)
    }
    
   
    getCurrentSkills(){
      this.userService.getSkill().subscribe((data:any)=>{
        this.currentSkills = data;
        console.log("curr sk.. ",this.currentSkills)
      })
    }
    getClasses(){
      this.userService.getClasses().subscribe(
        data=> this.currentClasses=data
        )
       
        return this.currentClasses;
    }
//it merge two skills
merge(newSkills:string[]=["a"],previous:string[]={}=["b"]){
//   let newSkills:string[] = ["a","b"]
//  let previous:string[] = ["d","e"]
 if (newSkills.length != null){
   for (let i =0 ; i<newSkills.length;i++){
    previous.push(newSkills[i])
   }
 }
 console.log(previous)
 return previous
}


  addskills() {
    //copying all the skills as object that are already exist
     this.userService.getSkill().subscribe(data=>this.currentSkills=data)
     let skills: string []  = this.currentSkills.skills;
     console.log("current " , skills);
     //taking values from input
    let newObject = Object.assign(this.username.value)
    //checking if the skill is already exist or not
     for(var iter in skills){
      if(this.username.value == skills[iter]){
          console.log(skills[iter]," already exits !")
      }
      else  var addedSkills = skills.concat(newObject)
     }
    console.log(skills)
    //parsing if the is multiple values, serpated by space
    //and pushing to previous array and sending the post reques
     //var str = newObject

    //  let splitted:string =str.split(" " , str.length)   
    //  console.log("splitted ", splitted)
    //  console.log("before adding new skill ", this.user)
    //  let newL:string[]= this.merge(skills,splitted)
    //  console.log("After additiion of skill ", newL)
    //  for (let i=0; i < splitted.length ;i++){
    //   skills.push(splitted[i])
    //   console.log("After additiion of skill ", skills)
    //  }
     
    // //console.log("Final skills after addintiion ", Skills)
     this.userService.updateUserProfile("","",addedSkills,"").subscribe(
      data => console.log(data));
      return   
}
addClass() {    
 
   this.user = Object.assign({}, this.form.value);
   var arr: string  [] = new Array()
   //arr.push(this.currentSkills)
   var currentClasses = this.getClasses()
   console.log("current " ,currentClasses);
   arr.push(currentClasses)
   var str = this.username.value
   var splitted = str.split(" " , str.length)
   console.log(splitted)
   for (let i=0; i< splitted.length ;i++){

    console.log(splitted[i])
    arr.push(splitted[i])
   }
   
  console.log(this.currentSkills)
   this.userService.updateUserProfile("","","",arr).subscribe(
    data => console.log(data));
    return   
}
private currentSkills;
private currentClasses;




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
  this.userService.updateUserProfile("myGit", "myLinkedIn",["c++","java","rust"] ,["cs 235", "cs 335"]).subscribe(
    data => console.log(data));
}


updateSkills(){
  console.log(this.addskills())
  this.userService.updateUserSkill(this.addskills() ).subscribe(
    data => console.log(data));
}



//not implemented yet--------------------------------------

addSkills(){
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

