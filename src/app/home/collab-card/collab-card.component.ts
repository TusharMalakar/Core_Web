import { HttpClient } from '@angular/common/http';
import { CollabModel, CollabModel2 } from './../../shared/models/collab.model';
import { Component, OnInit, Input } from '@angular/core';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';

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



  constructor(private http : HttpClient) { 
    
  }
  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';

  ngOnInit() {
    this.makeTable();
  }

  getAllRequired(){
    let data: string[] = this.collabData.skills.concat(this.collabData.classes);
    return data;
  }
  
  getCollabID(){
    console.log(this.collabData._id["$oid"])
    return this.collabData._id["$oid"];
  }
  

  //join collab by id
  joinCollab(){
    const body: CollabModel2 = {
      id : this.getCollabID(),
    }
    return this.http.post(this.rootUrl + "/collab/joinCollab", body)
    .subscribe (data => console.log(data) )
}



//leave collab by id
leaveCollab( ){
  const body: CollabModel2 = {
    id : this.getCollabID()
  }
  return this.http.post(this.rootUrl + "/collab/leaveCollab", body)
  .subscribe (data => console.log(data) )
}


  makeTable(){
    this.xAxis = this.getAllRequired();
    this.yAxis  = this.collabData.members;
    

  }

  
}
