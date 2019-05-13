import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollabMessagingComponent } from './collab-messaging/collab-messaging.component';
import { MessengerComponent } from './messenger/messenger.component';

const routes: Routes = [
    {
      //Path to UserPageComponent, which places the parameter ':username' in the path
      //':username' will be used to retrieve that specific users data 
      path:'message/:unameOrCollabId',
      component: CollabMessagingComponent
    },
    { 
      path: '',
      component: MessengerComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }