import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditClassesComponent } from './../edit-classes/edit-classes.component';
import { UserService } from './../../shared/dbAccess/user.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.css']
})
export class EditPictureComponent implements OnInit {

  //default variable for selected file.
  fileToUpload: File = null;
  submitPressed = false;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<EditClassesComponent>,
    //Handles passing of data from/to component opening the dialog
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

   //function which you use in (change)-event of your file input tag:
 handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
}

  async uploadFileToActivity() {
await this.userService.uploadProfilePicture(this.fileToUpload).subscribe((data: any)=>{})
//   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     }, error => {
//       console.log(error);
//     });
this.submitPressed = true;
this.dialogRef.close(this.submitPressed);
}

}
