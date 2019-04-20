import { UserService } from 'src/app/shared/dbAccess/user.service';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'create-collab',
  templateUrl: './create-collab.component.html',
  styleUrls: ['./create-collab.component.css']
})
export class CreateCollabComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private _formBuilder: FormBuilder, private userService : UserService) { 
    
    this.filteredFruits = this.fruitCtrl.valueChanges
      .pipe(
      startWith(null),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(val => {
        return this._filter(val || '')
      }) 
      );
  }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      collabTitle: ['', Validators.required],
      collabDescription: ['', Validators.required],
      collabLocation: ['', Validators.required],
      collabSize: ['', Validators.required],
      collabDate: ['', Validators.required],
    });
    
    this.secondFormGroup = this._formBuilder.group({
     
    });
  }

  add(event: MatChipInputEvent): void {
    

    if(!this.matAutocomplete.isOpen){

      const input = event.input;
      const value = event.value;

      if((value || '').trim()) {
        this.fruits.push(value.trim());
      }
  
      if(input) {
        input.value = '';
      } 

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

 
  private _filter(value: string): Observable<any[]> {
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    return this.userService.searchSkills(filterValue).pipe(
      map(response => response.filter(
        option => { console.log(option) }
      ))
    )
  }
  

}
