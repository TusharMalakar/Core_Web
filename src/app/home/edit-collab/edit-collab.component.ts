import { CollabModel } from 'src/app/shared/models/collab.model';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap, } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-collab',
  templateUrl: './edit-collab.component.html',
  styleUrls: ['./edit-collab.component.css']
})
export class EditCollabComponent implements OnInit {
  @Input() currentCollab: CollabModel;

  formGroup: FormGroup;
  _id: string;
  myCollab: CollabModel;

  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  //Variables for Skills.
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  skills: string[] = [];
  allSkills: string[] = [];

  //Variables for Classes.
  classCtrl = new FormControl();
  filteredClasses: Observable<string[]>;
  classes: string[] = [];
  allClasses: string[] = [];


  collabData: CollabModel;

  @ViewChild('skillInput') skillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  @ViewChild('classInput') classInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto2') matAutocomplete2: MatAutocomplete;

  constructor(private _formBuilder: FormBuilder, 
              private userService : UserService, 
              private collabService: CollabsService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
            
    this.collabData = new CollabModel;
    this.activeRoute.paramMap
    .subscribe(params => {
      this._id = params.get('_id');
    })
   }

  ngOnInit() {
    this.getCollabDetails(this._id);
      
    this.formGroup = this._formBuilder.group({
      title: [this.collabData.title, Validators.required],
      description: [this.collabData.description, Validators.required],
      location: [this.collabData.location, Validators.required],
      size: [this.collabData.size, Validators.required],
      date: [this.collabData.date, Validators.required],
      duration: [this.collabData.duration, Validators.required],
    });
    
  }

  getCollabDetails(id: string){
    this.collabService.getSingleCollab(id).subscribe(res => {
      console.log(res);
    });
  }

  
  
  

}
