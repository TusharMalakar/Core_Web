import { profile } from './../../shared/user.model';
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
  picture : Blob;
  userClass:UserModel["classes"];
  userSkill:UserModel["skills"];
  
  //place holder of image
  imageToShow: any;

  //default variable for selected file.
  fileToUpload: File = null;
  
  //Auto complete variables.
  classesForm: FormGroup;
  filteredUsers: String[] = [];
  isLoading = false;

  constructor(private userService : UserService,private router : Router, private formBuilder: FormBuilder)
   { 
    this.userService.getUserdetails().subscribe(userData =>{
      this.userData = userData;
      this.userClass= userData["classes"]
      //console.log("userClasses : "+this.userClass)
      this.userSkill= userData["skills"]
      //console.log("userSkills : "+ this.userSkill)
    });
   }

  ngOnInit() {
    this.profilePicture();
    this.classesForm = this.formBuilder.group({
      userInput: null
    })
    
  }
  addClass(){
    this.userService.updateUserclass("newClass").subscribe((data:any)=>{
      //console.log(data)
    })
  }

  addSkill(input:{}=["new1", "new2"]){
    let body = Object.assign({},this.userSkill,input)
    //console.log("checking JSON body " , body)
    this.userService.updateUserSkill(body).subscribe((data:any)=>{
      //console.log(data)
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

  //Below the Picture unloading two step process
  //function which you use in (change)-event of your file input tag:
  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
  }
  uploadFileToActivity() {
    this.userService.uploadProfilePicture(this.fileToUpload).subscribe((data: any)=>{
      console.log(data)
      if(data["success"]==true){
        this.router.navigate(['/user']) 
      }
    });  
 }




}
