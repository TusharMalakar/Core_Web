import { EditPictureComponent } from './../edit-picture/edit-picture.component';
import { EditSkillsComponent } from './../edit-skills/edit-skills.component';
import { EditClassesComponent } from './../edit-classes/edit-classes.component';
import { EditUserFormComponent } from './../edit-user-form/edit-user-form.component';
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/shared/models/user.model';
import { FormControl, Form, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  canEdit:boolean;
  //Will hold our user data.
  userData: UserModel[];
  username: string;
  
  //Auto complete variables.
  classesForm: FormGroup;
  filteredUsers: String[] = [];
  isLoading = false;
  userClass:UserModel["classes"];
  userSkill:UserModel["skills"];
  

  //place holder of image
  imageToShow: any;

  //default variable for selected file.
  fileToUpload: File = null;

  /*
  TODO: 
    Autocomplete on edit skills and classes. 

  */
  constructor(
    private userService : UserService,
    private router : Router, 
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog)
   {    }

  async ngOnInit() {
    await this.activeRoute.paramMap
    .subscribe(params => {
      this.username = params.get('username');
    })

    await this.userService.getUserdetails()
      .subscribe(res => { 
                if(res['username'] === this.username || this.username == null){
                  this.canEdit = true;
                }else{
                  this.canEdit = false;
                }  
              
              }); 
      
    this.loadUserData(this.username);
    this.classesForm = this.formBuilder.group({
      userInput: null
    })
  }

loadUserData(username: string){

  if(username){
    this.userService.getMemberdetails(username).subscribe(userData => {
      this.userData = userData;
      this.userClass= userData["classes"]
      this.userSkill= userData["skills"]
      this.profileMemberPicture(username);
  
    });
  } else {
    this.userService.getUserdetails().subscribe(userData => {
      this.userData = userData;
      this.userClass= userData["classes"]
      this.userSkill= userData["skills"]
      this.profilePicture();
  
    });
  }
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
 profileMemberPicture(username: string){
  this.userService.getMemberPicture(username).subscribe((picture:Blob)=>{
    this.createImageFromBlob(picture)
    //console.log(picture)
  })
}


  openDialog1(): void {
    //Dialog refeerence
    const dialogRef = this.dialog.open(EditUserFormComponent, {
      width: '50%',
      data: {
        userData: this.userData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    //Dialog refeerence
    const dialogRef = this.dialog.open(EditClassesComponent, {
      width: '95%',
      data: {
        userData: this.userData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    //Dialog refeerence
    const dialogRef = this.dialog.open(EditSkillsComponent, {
      width: '70%',
      data: {
        userData: this.userData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog4(){
    //Dialog refeerence
    const dialogRef = this.dialog.open(EditPictureComponent, {
      width: '280px',
      data: {
        userData: this.userData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if(result == true){
      
      }
    });

  }

  changeProfilePic(){
    console.log("Change profile pic.")
  }



}
