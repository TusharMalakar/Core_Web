import { Component, OnInit, Input } from '@angular/core';
import { TableBuilder } from 'src/app/shared/models/tableBuilder.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/dbAccess/user.service';

@Component({
  selector: 'collab-table',
  templateUrl: './collab-table.component.html',
  styleUrls: ['./collab-table.component.css']
})
export class CollabTableComponent implements OnInit {
  @Input() table: Array<TableBuilder> = [];
  @Input('xAxisReq') xAxisReq: Array<string> = [];
 

  constructor(
    private router: Router,
    private userservice : UserService
  ) 
  { }

  ngOnInit() {
    //console.log(this.xAxisReq);
  }

  goToProfile(user: string) {
      this.router.navigate(['/user/', user]);
  }

  getUserDispname(username: string){
    this.userservice.getMemberdetails(username).subscribe((data :any)=>
    {
      console.log(data)
    })
  }

}


