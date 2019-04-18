import { UserService } from './user.service';
import { MessageModel } from './../models/messageModel';
import { UserModel } from './../models/user.model';
import { CollabModel2 } from './../models/collab.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollabModel } from '../models/collab.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CollabsService {

  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient, private userService : UserService) { }
  private collabID;
  //collab/getCollabDetails
  collabDetails(){ 
    return this.http.get( this.rootUrl +"/collab/getCollabDetails");
  }
  //collab/getAllCollabs
  allCollabs(): Observable<CollabModel[]> { 
    return this.http.get<CollabModel[]>( this.rootUrl +"/collab/getAllCollabs");
  }
  //collab/getActiveCollabs 
  activeCollabs(){ 
    return this.http.get( this.rootUrl +"/collab/getActiveCollabs");
  }
   //messaging/myConvos
   myCollabs(){ 
    return this.http.get( this.rootUrl +"/messaging/myConvos");
  }


  //______________POST_REQUEST____________

  //create a new collab, wehre owner = currentUser
  // size, date, duration, location, title, description, classes and skills are required
  CreateCollab( owner, size, member, date, duration, location, status, title,description, classes,skills,applicants ){

    const body: CollabModel2 = {
      owner : owner,
      size :size,
      members:member,
      date :date,
      duration :duration,
      location :location,
      status :status,
      title:title,
      description:description,
      classes:classes,
      skills:skills,
      applicants:applicants 
    }
    return this.http.post(this.rootUrl + "/collab/createCollab", body)
    .subscribe (data => console.log(data) )
  }

//edit collab
//"_id", "owner", "size", "members", "data", "duration", "location", "status", "title", "description", "classes", "skills", "applicants".
editCollab(id, owner, size, member, data, duration, location, status,title, description, classes,skills, applicants){
  const body: CollabModel2 = {
    owner : owner,
    size :size,
    members:member,
    //date :'',
    duration :duration,
    location :location,
    status :status,
    title:title,
    description:description,
    classes:classes,
    skills:skills,
    applicants:applicants 
  }

}

deleteCollab(owner){
  const body :CollabModel={
    owner: owner
  }
  return this.http.post(this.rootUrl+"/collab/deleteCollab", body)
}

  //_______________________IN-Progress__________________

  ///collab/getRecommendedCollabs 
  recomendedCollab(){
    var skills
    var classes
    this.userService.getSkill().subscribe((data:any)=> {skills=data})
    this.userService.getClasses().subscribe((data:any)=>{classes=data})
    const body : UserModel = {
      skills : skills,
      classes : classes
    }
    return this.http.get (this.rootUrl + "/collab/getRecommendedCollabs")
  }
  
 

  




}


