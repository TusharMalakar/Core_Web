import { CollabCardComponent } from './home/collab-card/collab-card.component';
import { AuthGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/collab-list/home.component';
import { LoginComponent } from './login/login-page/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register-page/register.component';


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