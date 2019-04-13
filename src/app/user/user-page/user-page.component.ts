import { HttpClient } from '@angular/common/http';
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

  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';

  constructor(private userService : UserService,private router : Router, private formBuilder: FormBuilder, private http : HttpClient)
   { 
    this.userService.getUserdetails().subscribe(userData => this.userData = userData);
   }

  ngOnInit() {
    
    this.classesForm = this.formBuilder.group({
      userInput: null
    })
    
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

//final picture from Bolb file, it's ready to display
isImageLoading = false;
getImageFromService() {
  this.isImageLoading = false;
  this.userService.getPicture().subscribe(data =>{
    this.createImageFromBlob(data);
    this.isImageLoading = true;
  }, 
  error => {
    this.isImageLoading = false;
    console.log(error);
  });
}


//two steps uploading process
//it will take a file as input
selectedFile: File = null;
onFileSelected (event){
  this.selectedFile = <File>event.target.files[0];
}

//working on profile-picture uploading
onUpload(){
  const formData = new FormData();
  formData.append ('image', this.selectedFile, this.selectedFile.name)
  return this.http.post(this.rootUrl +'/user/profilePicture' , formData)
  
  .subscribe (data => {
    console.log(data);
  })
}

}
