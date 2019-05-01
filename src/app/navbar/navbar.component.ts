import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollabModel } from '../shared/models/collab.model';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collabData : CollabModel;
  members : any;
  panelOpenState = false;
  constructor(private router: Router, private collabService : CollabsService) { }

  ngOnInit() {
    this.collabService.collabDetails().subscribe((collab:CollabModel)=>{this.collabData= collab;})
  }

  messagePageLink(){
    this.router.navigate(['/home/message'])
  }

  logOut(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

}

