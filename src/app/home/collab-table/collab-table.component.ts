import { Component, OnInit, Input } from '@angular/core';
import { TableBuilder } from 'src/app/shared/models/tableBuilder.model';
import { Router } from '@angular/router';

@Component({
  selector: 'collab-table',
  templateUrl: './collab-table.component.html',
  styleUrls: ['./collab-table.component.css']
})
export class CollabTableComponent implements OnInit {
  @Input() table: Array<TableBuilder> = [];
  @Input('xAxisReq') xAxisReq: Array<string> = [];
 

  constructor(
    private router: Router
  ) 
  { }

  ngOnInit() {
    //console.log(this.xAxisReq);
  }

  goToProfile(user: string) {
      this.router.navigate(['/user/', user]);
  }

}


