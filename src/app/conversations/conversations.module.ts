import { HomeRoutingModule } from './conversations-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollabMessagingComponent } from './collab-messaging/collab-messaging.component';

@NgModule({
  declarations: [CollabMessagingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ]
})
export class ConversationsModule { }
