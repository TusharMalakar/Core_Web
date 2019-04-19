import { HttpClient } from '@angular/common/http';
import { CollabModel } from 'src/app/shared/models/collab.model';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith, first } from 'rxjs/operators';

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

  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private collabService : CollabsService) { 
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice() ) );
  }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      collabTitle: ['testValueOfCollabTitle', Validators.required],
      collabDescription: ['', Validators.required],
      collabLocation: ['', Validators.required],
      collabSize: ['', Validators.required],
      collabDate: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
    });

    const body : CollabModel = Object.assign({}, this.firstFormGroup.value, this.secondFormGroup.value)
    console.log(body)

    //retriving form value and assigning to body attributes
    body.description= this.firstFormGroup.value["collabTitle"]
    console.log(body.description)
    
    
    //this.createCollab();
    //testing to add to JSON BODYS
    const body1 : CollabModel = {
      owner : "test owner1"
    }
    const body2 : CollabModel = {
      location : "anywhere"
    }
    const CombinedBody = Object.assign({}, body1,body2)
    console.log(CombinedBody)
    
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

 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  
createCollab(){
  console.log(this.firstFormGroup.value)
  console.log(this.secondFormGroup.value)

  // size, date, duration, location, title, description, classes and skills are required
  const body: CollabModel = {
      owner      : this.firstFormGroup.value[""],
      size       : this.firstFormGroup.value["collabSize"],
      members    : this.firstFormGroup.value[""],
      date       : this.firstFormGroup.value["collabDate"],
      duration   : this.firstFormGroup.value[""],
      location   : this.firstFormGroup.value["collabLocation"],
      status     : this.firstFormGroup.value[""],
      title      : this.firstFormGroup.value[""],
      description: this.firstFormGroup.value["collabDescription"],
      classes    : this.firstFormGroup.value[""],
      skills     : this.firstFormGroup.value[""],
      applicants : this.firstFormGroup.value[""],

    }
  //sending http request to create a new collab
  //return this.http.post(this.rootUrl+"/collab/createCollab",body)
        // or through collab service
  //passing a JSON OBJECT to create a new collab
  this.collabService.CreateCollab(body)
}

}
