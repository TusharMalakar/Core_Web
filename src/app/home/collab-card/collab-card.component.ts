import { HttpClient } from '@angular/common/http';
import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { UserService } from './../../shared/dbAccess/user.service';
import { CollabModel, CollabMode2 } from './../../shared/models/collab.model';
import { Component, OnInit, Input } from '@angular/core';
import { TableBuilder } from 'src/app/shared/models/tableBuilder.model';

export interface Requirements{
  skillOrClass: string,
  type: string
}

@Component({
  selector: 'collab-card',
  templateUrl: './collab-card.component.html',
  styleUrls: ['./collab-card.component.css']
})
export class CollabCardComponent implements OnInit {

  @Input() collabData: CollabModel;
  table: Array<TableBuilder> = [];  
  xAxisReq: Array<string> = [];
  alreadyBuilt: boolean = false;
  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  

  constructor(private userService: UserService, 
              private http : HttpClient,
              private collabService: CollabsService) {}

  ngOnInit() {
    //console.log(this.collabData);
  }

  /*
  Function that will build our table. 
  async: Will allow us to do await functions
  */
  async makeTable(){

    if(this.alreadyBuilt){

    } else {
    this.alreadyBuilt = true;
    //Will store the list of users.
    let yAxisUsers : string[];

    //Fuction will stop here until function getAllRequred returns
    this.xAxisReq = await this.getAllRequired(); 
    
    //Will members of the collaboration
    yAxisUsers  = this.collabData.members;
    //console.log("Skills Required: " , xAxisReq);
    
    //Will loop through all the users and check if they know the required skills and classes
    for(let y of yAxisUsers){
      //console.log(x, " is being checked");

        //Will hold a single instance of TableBuilder modle
        let tableRow = await this.checkIfKnown(y,this.xAxisReq);
        this.table.push(tableRow);
        //console.log(tableRow);
     }
    }
    
  }

  //WIll check if a user knows skill or class, from the list of classes and skills that a user knows
  async checkIfKnown(userName: string, listOfRequired: string[]){
    let tmp: TableBuilder = null;

    tmp = new TableBuilder(userName);

    let knownByUser;
   
    for(let x of listOfRequired){
      
      //Will return both skills and classes in a single array
      await this.userService.getUserSkillsAndClasses(userName).then(function(result){
        knownByUser = result;
      });
      
      if(knownByUser.includes(x)){
        //console.log(userName , " knows ", x);
        tmp.setKnown(x,true);
        
      } else {
        //console.log(userName , " doesn't know ", x);
        tmp.setKnown(x,false);
      }
    }
    
    return tmp;
  }

  getAllRequired(){
    let xAxisReq: Array<string> = [];
    xAxisReq = (this.collabData.skills).concat(this.collabData.classes);

    return xAxisReq;
  }

  
  getCollabID(){
   // console.log(this.collabData._id["$oid"])
    return this.collabData._id["$oid"];
  }
  

  //join collab by id
  joinCollab(){
    const body: CollabMode2 = {
      id : this.getCollabID(),
    }
    return this.http.post(this.rootUrl + "/collab/joinCollab", body)
    .subscribe (data => console.log(data) )
}



//leave collab by id
leaveCollab(){
  const body: CollabMode2 = {
    id : this.getCollabID()
  }
  return this.http.post(this.rootUrl + "/collab/leaveCollab", body)
  .subscribe (data => console.log(data) )
}

deleteCollab(){
  console.log("Not implemented yet")
}

}
