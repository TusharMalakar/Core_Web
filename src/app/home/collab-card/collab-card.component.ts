import { CollabModel } from './../../shared/models/collab.model';
import { Component, OnInit, Input } from '@angular/core';

export interface PerioticElement {
  
}

@Component({
  selector: 'collab-card',
  templateUrl: './collab-card.component.html',
  styleUrls: ['./collab-card.component.css']
})
export class CollabCardComponent implements OnInit {

  @Input() collabData: CollabModel;
  xAxis : string[];
  yAxis : string[];



  constructor() { 
    
  }

  ngOnInit() {
    this.makeTable();
  }

  getAllRequired(){
    let data: string[] = this.collabData.skills.concat(this.collabData.classes);
    return data;
  }

  makeTable(){
    this.xAxis = this.getAllRequired();
    this.yAxis  = this.collabData.members;
    

  }

  
}
