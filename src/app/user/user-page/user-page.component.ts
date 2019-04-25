import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/shared/models/user.model';
import { FormControl, Form, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  //Will hold our user data.
  userData: UserModel[];
  
  //Auto complete variables.
  classesForm: FormGroup;
  filteredUsers: String[] = [];
  isLoading = false;

  //regular expression to check empty string
  regex = "^\\s+$";

  //place holder of image
  imageToShow: any;

  //default variable for selected file.
  fileToUpload: File = null;

  /*
  TODO: 
    DISPLAY Image
    Edit all fields
    Autocomplete on edit skills and classes. 

  */
  constructor(private userService : UserService,private router : Router, private formBuilder: FormBuilder)
   { 
    this.userService.getUserdetails().subscribe(userData => this.userData = userData);
    //console.log(this.userData);
   }

  ngOnInit() {
    this.profilePicture();
    this.classesForm = this.formBuilder.group({
      userInput: null
    })
  }


createImageFromBlob(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    
     //image to show is the final place holder of profile picture
     this.imageToShow = reader.result;
     return this.imageToShow
  }, false);

  if (image) {
     reader.readAsDataURL(image);
  }
}

profilePicture(){
   this.userService.getPicture().subscribe((picture:Blob)=>{
     this.createImageFromBlob(picture)
     //console.log(picture)
   })
 }
 //function which you use in (change)-event of your file input tag:
 handleFileInput(files: FileList) {
     this.fileToUpload = files.item(0);
 }

 uploadFileToActivity() {
   this.userService.uploadProfilePicture(this.fileToUpload).subscribe((data: any)=>{
     //console.log(data)
   });
}

addskill(newSkill){
  //return if input is empty string
  if(newSkill.value["NewSkill"]=this.regex ){
    console.log("it is an empty string")
    return 0;
  }

  //taking values from input
  let newObject = Object.assign(newSkill.value["NewSkill"])
  //console.log(newObject)
  //copying all the skills as object that are already exist
  let skills: string []  = this.userData["skills"];
  
  
 //checking if the skill is already exist or not
  for(var iter in skills){
   if(newObject== skills[iter]){
       //console.log(skills[iter]," already exits !")
       return 0;
   }
  }
  //Combining input skill and previous skills
  newObject= skills.concat(newObject)
  this.userService.updateUserSkill(newObject).subscribe(data => {
    //console.log(data)
  });
}

addclass(newclass){
  //return if input is empty string
  if(newclass.value["NewClass"]=this.regex){
    console.log("it is an empty strings")
    return 0;
  }
  
  //taking values from input
  let newObject = Object.assign(newclass.value["NewClass"])
  //console.log(newObject)
  //copying all the classes as object that are already exist
  let classes: string []  = this.userData["classes"];
  
  
 //checking if the skill is already exist or not
  for(var iter in classes){
   if(newObject== classes[iter]){
      // console.log(classes[iter]," already exits !")
       return 0;
   }
  }
  //Combining input skill and previous skills
  newObject= classes.concat(newObject)
  this.userService.updateUserclass(newObject).subscribe(data => {
    //console.log(data)
  });
}


}
