import { MatListModule } from '@angular/material/list';


import { HomeComponent } from './collab-list/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

//Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

import { CollabCardComponent } from './collab-card/collab-card.component';

@NgModule({
  declarations: [HomeComponent, CollabCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    //Angular Material
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule
  ]
})
export class HomeModule { }
