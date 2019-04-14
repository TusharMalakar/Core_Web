import { Component, OnInit, Input } from '@angular/core';
import { TableBuilder } from 'src/app/shared/models/tableBuilder.model';

@Component({
  selector: 'collab-table',
  templateUrl: './collab-table.component.html',
  styleUrls: ['./collab-table.component.css']
})
export class CollabTableComponent implements OnInit {
  @Input() table: Array<TableBuilder> = [];
  @Input('xAxisReq') xAxisReq: Array<string> = [];
 

  constructor() { }

  ngOnInit() {
    //console.log(this.xAxisReq);
  }
}


