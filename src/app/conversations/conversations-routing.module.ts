import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollabMessagingComponent } from './collab-messaging/collab-messaging.component';

const routes: Routes = [
    {
      path: '',
    component: CollabMessagingComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }