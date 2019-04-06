import { AuthGuard } from './guard/auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path : 'login', component :LoginComponent},
  {path:'register', component: RegisterComponent},
  
  //protected components
  {path:'home',  canActivate : [AuthGuard],component: HomeComponent,data:{}},
  
  //default component
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// testuser1@myhunter.cuny.edu 