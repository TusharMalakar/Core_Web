import { UserService } from './../shared/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private service : UserService){}
  canActivate():  boolean {
      if ( !this.service.isAuthenticated() ){
        this.router.navigate(['/login']);
        return true;
      }
      else{
        this.router.navigate(['/home']);
        return false;
      }
     
      
  }

  

}
