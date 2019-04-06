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
  // {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'home', component: HomeComponent},
  

  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
