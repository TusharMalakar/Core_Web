import { UserService } from 'src/app/shared/dbAccess/user.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { CollabModel } from './../../shared/models/collab.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {
  userData: UserModel;

  constructor(
    private userService: UserService,
    private _formBuilder: FormBuilder,
    //Handles the openning/closing of the Dialog
    public dialogRef: MatDialogRef<EditUserFormComponent>,
    //Handles passing of data from/to component opening the dialog
    @Inject(MAT_DIALOG_DATA) public data: any){

    }
  collabData: CollabModel;

  ngOnInit() {

    
  }

  update(userData){
    this.userService.updateUserProfile(userData).subscribe(result => { console.log(result) });
    this.dialogRef.close();
  }

}
