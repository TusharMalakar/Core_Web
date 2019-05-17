import { CollabsService } from 'src/app/shared/dbAccess/collabs.service';
import { UserService } from './../../shared/dbAccess/user.service';
import { CollabModel } from './../../shared/models/collab.model';
import { Component, OnInit, Input } from '@angular/core';
import { TableBuilder } from 'src/app/shared/models/tableBuilder.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

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
 

  //Values being passed to collab-table
  table: Array<TableBuilder> = [];  
  xAxisReq: Array<string> = [];
  panelOpenState1 = false;
  panelOpenState2 = false;


  yAxisUsers: any
  alreadyBuilt: boolean = false;
  partOf = false; 
  isOwner = false; 

  //Will hold our user data.
  userData: UserModel;
  

  /**
  * @author Edwin Quintuna
  * 
  *	@brief Constructor that will create an instance of CollabCardComponent 
  *        and allow us to inject our dependencies; services that will be needed in the component
  * 
  *	@param[userService]    ,  service that will handle both retrival and updating user data via http requests
  *	@param[collabService]  ,  service that will handle all collaboration related http requests
  *	@param[router]         ,  enables navigation from one view to the next as users perform application tasks
  *
  * @pre nothing is set
  * @post A new instance of CollabModel is initialized
  * 
  *	@return nothing
  */
  constructor(private userService: UserService, 
              private collabService: CollabsService,
              private router: Router) {
               
                
              }

  /**
  * @author Edwin Quintuna
  * 
  *	@brief Function that will be called once Angular has finished initializing and setting up the component.
  *        Will use the userService to retrieve the details for the user that is currently logged in.
  * 
  * @pre no data for tthe user is known. userData is null
  * @post user data is retrieved via an Observable and that data is stored in the userData variable
  *        
  *	@return nothing
  */             
  async ngOnInit() {
    await this.userService.getUserdetails().subscribe(userData => this.userData = userData);
  }

  /*
  Function that will build our table. 
  async: Will allow us to do await functions
  */
  async makeTable(){

    if(this.alreadyBuilt){

    this.table = []
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

  RefreshPage(){
    this.getAllRequired();
    //Will members of the collaboration
    this.yAxisUsers  = this.collabData.members;
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
        //console.log(knownByUser);
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
  
  async actionCheck(){
    await this.isUserOwner();
    this.isPartOf();
  }

  isUserOwner(){
    
    if(this.collabData.owner == this.userData['username']){
      this.isOwner = true;
    } else {
      this.isOwner = false;
    }
  }

  isPartOf(){

    for(let member of this.collabData.members){
      if(member == this.userData['username']){
        this.partOf = true;
      }
    }
  }

  checkPartOf(){
    return this.partOf;
  }

  checkOwner(){
    return this.isOwner;
  }
  
  joinCollab(){

    this.collabService.joinCollab(this.collabData._id)
      .subscribe(res => { 
        if(res['success'] == true){
          this.partOf = true;
          this.getUpdatedData();
        } else {
          
        }
      });
  }

  leaveCollab(){
    this.collabService.leaveCollab(this.collabData._id)
      .subscribe(res => { 
        if(res['success'] == true){
          this.partOf = false;
          this.getUpdatedData();
        } else {
          
        } 
      });
  }

  deleteCollab(){
    this.collabService.deleteCollab(this.collabData._id)
      .subscribe(res => { 
        console.log(res)
        if(res){
          window.location.reload();
        }
      })
  }

  editCollab(){
    this.router.navigate(['/home/editcollab/',this.collabData._id["$oid"]]);
  }

  getUpdatedData(){
    this.collabService.getSingleCollab(this.collabData._id["$oid"]).subscribe(
      res => {
        console.log(res['0'],
        this.collabData = res['0'])
      }
    );
  }

  panelWasOpen1(){
    this.panelOpenState1 = true;
    this.makeTable()
  }

  panelWasOpen2(){
    this.panelOpenState2 = true;
    this.actionCheck();
  }

  


}
