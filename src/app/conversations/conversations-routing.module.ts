import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollabMessagingComponent } from './collab-messaging/collab-messaging.component';
import { MessengerComponent } from './messenger/messenger.component';

const routes: Routes = [
    {
      path: '',
    component: CollabMessagingComponent,
    },
    {
      path: 'messenger',
      component: MessengerComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }