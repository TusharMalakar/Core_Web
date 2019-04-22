import { CollabModel } from 'src/app/shared/models/collab.model';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap, } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'create-collab',
  templateUrl: './create-collab.component.html',
  styleUrls: ['./create-collab.component.css']
})
export class CreateCollabComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  
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
              private router: Router) {
    this.collabData = new CollabModel;
   }

  ngOnInit() {
    
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(400),
      distinctUntilChanged(),
      map((skill: string | null) => skill ? this._filter(skill) : this.allSkills.slice()));

    this.filteredClasses = this.classCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(400),
      distinctUntilChanged(),
      map((_class: string | null) => _class ? this._filter(_class) : this.allClasses.slice()));


      
    this.firstFormGroup = this._formBuilder.group({
      title: [this.collabData.title, Validators.required],
      description: [this.collabData.description, Validators.required],
      location: [this.collabData.location, Validators.required],
      size: [this.collabData.size, Validators.required],
      date: [this.collabData.date, Validators.required],
      duration: [this.collabData.duration, Validators.required],
    });
    
  }

  addSkill(event: MatChipInputEvent): void {

    if(!this.matAutocomplete.isOpen){

      const input = event.input;
      const value = event.value;

      if((value || '').trim()) {
        this.skills.push(value.trim());
      }
  
      if(input) {
        input.value = '';
      } 

      this.skillCtrl.setValue(null);
    }
  }

  removeSkill(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selectedSkill(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  addClass(event: MatChipInputEvent): void {

    if(!this.matAutocomplete.isOpen){

      const input = event.input;
      const value = event.value;

      if((value || '').trim()) {
        this.classes.push(value.trim());
      }
  
      if(input) {
        input.value = '';
      } 

      this.classCtrl.setValue(null);
    }
  }

  removeClass(_class: string): void {
    const index = this.classes.indexOf(_class);

    if (index >= 0) {
      this.classes.splice(index, 1);
    }
  }

  selectedClass(event: MatAutocompleteSelectedEvent): void {
    this.classes.push(event.option.viewValue);
    this.classInput.nativeElement.value = '';
    this.classCtrl.setValue(null);
  }

  createCollab(){    
    this.collabData = Object.assign({}, this.firstFormGroup.value);
    this.collabData.skills = this.skills;
    this.collabData.classes = this.classes;
    this.collabData.date = (this.collabData.date).valueOf();
    this.collabData.duration *= 86400000;
    this.collabData.duration += this.collabData.date;
    let createResult: boolean;
    this.collabService.createCollab(this.collabData)
      .subscribe(result => { 
        if(result['success']){
          this.router.navigate(['/home'])
        } else {
          error => {console.error('success' + error)}
        }

       } );
    
    
  }

  private _filter(value: string){
    const filterValue = value.toLowerCase();

    this.userService.searchSkills(filterValue).subscribe(res => { this.allSkills = res['matches'] });
    
    return this.allSkills.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);

  }

  
  

}
