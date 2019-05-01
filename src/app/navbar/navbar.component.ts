import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollabModel } from '../shared/models/collab.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collabData : CollabModel;
  imageToShow:any;
  panelOpenState = false;
  public mem:string = null
  
  constructor(private router: Router, private collabService : CollabsService, private userservice: UserService) { }

  ngOnInit() {
    this.collabService.collabDetails().subscribe((collab:CollabModel)=>{this.collabData= collab;});
  }

  



GoToProfile(mem_:any){
  this.mem=mem_
  console.log("Going to profile page of "+this.mem)
  this.router.navigate(['/user'])
  }

  messagePageLink(mem){
    this.mem=mem
    console.log("Going to message page of "+this.mem)
    this.router.navigate(['/home/message'])
  }

  logOut(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  

}

