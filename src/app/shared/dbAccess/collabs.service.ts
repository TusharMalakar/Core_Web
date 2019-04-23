import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollabModel } from '../models/collab.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  //Get Both All and My Collabs
  getCollabs(collabType: string){
    return this.http.get( this.rootUrl + "/collab/" + collabType);
  }

  //______________POST_REQUEST____________

  //create a new collab, wehre owner = currentUser
  // size, date, duration, location, title, description, classes and skills are required
  createCollab(collabData: CollabModel){

    const body: CollabModel = {
      size : collabData.size,
      date : collabData.date,
      duration : collabData.duration,
      location : collabData.location,
      title: collabData.title,
      description: collabData.description,
      classes: collabData.classes,
      skills: collabData.skills,
    }
    return this.http.post(this.rootUrl + "/collab/createCollab", body);
  }

  //Join Collab
  joinCollab(id){

    console.log(id["$oid"]);
    const body = {
     id : id["$oid"]
    }
    return this.http.post(this.rootUrl + "/collab/joinCollab", body);
  }

  //Leave Collab
  leaveCollab(id){

    console.log(id["$oid"]);
    const body = {
     id : id["$oid"]
    }
    return this.http.post(this.rootUrl + "/collab/leaveCollab", body);
  }

  //TODO: Get this http request working
  deleteCollab(id){
    console.log(id["$oid"]);
    const body = {
      id : id["$oid"]
    }
    return this.http.delete(this.rootUrl + "/collab/deleteCollabForReal");
  }

  //TODO: Get this http request working
  getReqCollabs(classes: string[], skills: string[]){
    console.log(classes);
    console.log(skills);

    const body = {
      classes : classes,
      skills  : skills
    }

    return this.http.get(this.rootUrl + "/collab/getRecommendedCollabs");
  }

  //Requires a JSON"_id"
  editCollab(_id, owner, size,members, date, duration, location, status, title, description,classes, skills, applicants){
      const body: CollabModel = {
          _id         : _id,
          owner       : owner,
          size        : size,
          members     : members,
          date        : date,
          duration    : duration,
          location    : location,
          status      : status,
          title       : title,
          description : description,
          classes     : classes,
          skills      : skills,
          applicants  : applicants
      }
      return this.http.post(this.rootUrl + "/collab/editCollab",body)
  }

    
    


}

