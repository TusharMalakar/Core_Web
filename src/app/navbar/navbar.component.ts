import { AuthGuard } from './../guard/auth.guard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean;
  constructor(private router: Router, private auth: AuthGuard) { }

  ngOnInit() {
    
  }

  logOut(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  user(){
    this.router.navigate(['/user']);
  }

}

