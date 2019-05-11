import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerComponent } from './messenger/messenger.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';



//Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';


import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [MessengerComponent],
  imports: [
    CommonModule,
    MessengerRoutingModule,

    //Angular Material
    CommonModule,
    
    //Angular Material
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    ScrollDispatchModule,
    MatChipsModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    

    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class MessengerModule { }
