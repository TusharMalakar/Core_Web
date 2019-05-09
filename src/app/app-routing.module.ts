import { NgModule } from '@angular/core';
import { CollabCardComponent } from './home/collab-card/collab-card.component';
import { AuthGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/collab-list/home.component';
import { LoginComponent } from './login/login-page/login.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register-page/register.component';


/**
* @author Edwin Quintuna
* @author Tushar Malakar
* 
*	@brief Configure the routes for the feature modules.
*
*	@param[routes] , variable that will hold the object with our routes
*	@param[path]       , represents the queue that the process is in.
*	@param[loadChildren]       , represents the current burst time the process is on.
*	@param[canActivate]       , represents the current burst time the process is on.
*	@return nothing
*/
const routes: Routes = [
  {
    path : 'login', 
    loadChildren : './login/login.module#LoginModule',
    canActivate: [AuthGuard]
  },
  {
    path:'register', 
    loadChildren : './register/register.module#RegisterModule',
    canActivate: [AuthGuard]
  },
  {
    path:'home', 
    loadChildren : './home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'conversations',
    loadChildren: './conversations/conversations.module#ConversationsModule',
    canLoad: [AuthGuard]
  },
  //default component
  {
    path:'**', 
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }