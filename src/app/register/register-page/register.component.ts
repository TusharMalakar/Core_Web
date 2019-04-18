import { UserModel } from './../../shared/models/user.model';
import { CollabModel } from 'src/app/shared/models/collab.model';
import { CollabsService } from './../../shared/dbAccess/collabs.service';
import { UserService } from '../../shared/dbAccess/user.service';
import { Component , OnInit} from '@angular/core';
import {Router } from '@angular/router';
//import { RegisterModel } from '../../shared/models/register.model';

//Needed to implement Reactive Forms
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  user: UserModel;
  user2 : UserModel;
  form: FormGroup;
  form2: FormGroup;

  isRegiError : boolean;
  constructor(
    private collabService : CollabsService,
    private userService : UserService,
    private router : Router,
    private formBuilder: FormBuilder) 
    {
      this.user = new UserModel()
      this.user2 = new UserModel()
     }

  ngOnInit() {
    this.form2 = this.formBuilder.group({
      classes: this.user.classes
   }); 
    this.form = this.formBuilder.group({
       skills: this.user.skills
    });

   
    }
    
    
   
getCurrentSkills(){
      this.userService.getSkill().subscribe((data:any)=>{
        this.currentSkills = data;
        console.log("curr sk.. ",this.currentSkills)
      })
    }

getClasses(){
      this.userService.getClasses().subscribe((data :any)=> {
        
        this.currentClasses=data;
        console.log("curr classes.. ",this.currentClasses)
      })
    }


//skill can be added but one at a time
addskills() {
    //copying all the skills as object that are already exist
     this.userService.getSkill().subscribe(data=>this.currentSkills=data)
     let skills: string []  = this.currentSkills.skills;
     
     //taking values from input
    let newObject = Object.assign(this.skills.value)
    //checking if the skill is already exist or not
     for(var iter in skills){
      if(this.skills.value == skills[iter]){
          console.log(skills[iter]," already exits !")
          return 0;
      }
      else if(this.skills.value==null || this.skills.value == ""){
        return 0
      }
     }
    newObject= skills.concat(newObject)
     this.userService.updateUserProfile("","",newObject,"").subscribe(
      data => console.log(data));
      this.getCurrentSkills()
    
}


addClass(){
  //copying previous skills which is JSON OBJ
   let classes: string []  = this.currentClasses;
  
   //taking values from input and converting as JSON Object
  let newObject = Object.assign(this.classes.value)
  
  //checking if the inputed class is already exist or not in the class obj
   for(var iter in classes){
    if(this.classes.value == classes[iter]){
        console.log(classes[iter]," already exits !")
        return 0;
    }
    else if(this.classes.value==null){
      return 0
    }
   }

   //if input class is not exist in the class obj concate new class to previous class
  newObject= classes.concat(newObject)
  
  
   this.userService.updateUserProfile("","","",newObject).subscribe(
    data => console.log(data));
}

get skills(){
  return this.form.get('skills');
}

get classes(){
  return this.form.get('classes');
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

searchedSkill(){
  this.userService.searchSkills().subscribe((data:any)=>{
      this.dbSkills=data;
  })
}

searchedClasses(){
  this.userService.searchClasses().subscribe((data:any)=>{
    this.dbClasses=data;
  })
}

private currentSkills;
private currentClasses;
private dbSkills;
private dbClasses;


//not implemented yet--------------------------------------


recomendedCollab(){
 // this.collabService.recomendedCollab(["c"],["r"]).subscribe(data =>
   // console.log(data))
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
    console.log(data)
      this.createImageFromBlob(data[0]);
     console.log(data)
     //return myPicture;
    //this.isImageLoading = false;
    //console.log(data)
  })
}


}

