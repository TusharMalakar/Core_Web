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
  @ViewChild('auto') matAutocomplete1: MatAutocomplete;

  @ViewChild('classInput') classInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto2') matAutocomplete2: MatAutocomplete;

  /**
  * @author Edwin Quintuna
  * 
  *	@brief Constructor that will create an instance of EditCollabComponent 
  *        and allow us to inject our dependencies; services that will be needed in the component
  *
  *	@param[userService]    ,  service that will handle both retrival and updating user data via http requests
  *	@param[collabService]  ,  service that will handle all collaboration related http requests
  *	@param[activeRoute]    ,  will allow us to retrieve path parameters if they are set
  *	@param[router]         ,  enables navigation from one view to the next as users perform application tasks
  *	@return nothing
  */
  constructor(
              private userService : UserService, 
              private collabService: CollabsService,
              private activeRoute: ActivatedRoute,
              private router : Router) {
            
    this.collabData = new CollabModel;
    this.activeRoute.paramMap
    .subscribe(params => {
      this._id = params.get('_id');
    })
   }

  async ngOnInit() {
    await this.getCollabDetails(this._id);
    
    this.skillCtrl.valueChanges.pipe(
      
      startWith(null),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap( (query: string) => this.userService.searchSkills(query)  )
      ).subscribe( (skills: Observable<string[]>) => this.filteredSkills = skills["matches"] );

    this.classCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap( (query: string) => this.userService.searchClasses(query)  )
      ).subscribe( (classes: Observable<string[]>) => this.filteredClasses = classes["matches"] );
    
  }

  

  getCollabDetails(id: string){
    this.collabService.getSingleCollab(id).subscribe(res => {
      this.collabData = res['0'];
      this.skills = res['0']['skills'];
      this.classes = res['0']['classes'];
    });
  }

  async update(collabUpdatedData){
    
    this.collabData = collabUpdatedData;
    this.collabData.skills = this.skills;
    this.collabData.classes = this.classes;
    

    console.log(collabUpdatedData);
  
    await this.collabService.editCollab(this.collabData, this._id)
      .subscribe(res => { 
          if(res['success']){ 
            this.router.navigate(['/home'])
           } else {
            console.error(res);
          }
          });
    
  }

  addSkill(event: MatChipInputEvent): void {

    if(!this.matAutocomplete1.isOpen){

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

    if(!this.matAutocomplete2.isOpen){

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

  
  
  

}
