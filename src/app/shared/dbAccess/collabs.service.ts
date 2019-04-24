import { CollabModel, CollabMode2 } from './../models/collab.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CollabsService {

  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient) { }

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

  getCollabs(collabType: string){
    return this.http.get( this.rootUrl + "/collab/" + collabType);
  }
   //join collab by id
   joinCollab(id){
    const body: CollabMode2 = {
      id     : id
    }
    return this.http.post(this.rootUrl + "/collab/joinCollab", body)
    .subscribe (data => console.log(data) )
}

//leave collab by id
leaveCollab(id){
  const body: CollabMode2 = {
    id : id
  }
  return this.http.post(this.rootUrl + "/collab/leaveCollab", body)
  .subscribe (data => console.log(data) )
}

  //______________POST_REQUEST____________

  //create a new collab, wehre owner = currentUser
  // size, date, duration, location, title, description, classes and skills are required
  //CreateCollab( owner, size, member, date, duration, location, status, title,description, classes,skills,applicants ){
  CreateCollab(body:{}){
  
    // const body: CollabModel = {
    //   owner : owner,
    //   size :size,
    //   members:member,
    //   date :date,
    //   duration :duration,
    //   location :location,
    //   status :status,
    //   title:title,
    //   description:description,
    //   classes:classes,
    //   skills:skills,
    //   applicants:applicants 
    // }
    return this.http.post(this.rootUrl + "/collab/createCollab", body)
    .subscribe (data => console.log(data) )
  }

  recomandedCollab(skills, classes){
    const body = {
      skills  : skills,
      classes : classes
    }
    return this.http.get(this.rootUrl+"/user/getRecCollabs")
  }

}

