import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';

//Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule }  from '@angular/material/grid-list';
import { MatListModule }  from '@angular/material/list';
import { UpdateUserdataComponent } from './update-userdata/update-userdata.component';

@NgModule({
  declarations: [UserPageComponent, UpdateUserdataComponent],
  imports: [
    CommonModule,
    UserRoutingModule,

    //Angular Material
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    ScrollDispatchModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatExpansionModule,

    //Flex Module
    FlexLayoutModule,

    //Forms
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
