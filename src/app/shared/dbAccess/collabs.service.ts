import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollabModel } from '../models/collab.model';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollabsService {

  readonly rootUrl = 'http://13.58.204.157:5000';
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

  getSingleCollab(_id: string){
    
    const body = {
      id : _id
     }
     
    console.log(body); 
    return this.http.post(this.rootUrl + "/collab/getCollab", body );
  }

  //______________POST_REQUEST____________

  //create a new collab, wehre owner = currentUser
  // size, date, duration, location, title, description, classes and skills are required
  createCollab(collabData: CollabModel) {

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

    const body = {
      id : id["$oid"]
    }
    return this.http.request('delete',this.rootUrl + "/collab/deleteCollabForReal", {body});
  }

  //TODO: Get this http request working
  getReqCollabs(classes: string[], skills: string[]){
    console.log(classes);
    console.log(skills);

    const body = {
      classes : classes,
      skills  : skills
    }

    return this.http.post(this.rootUrl + "/collab/getRecommendedCollabs", body);
  }

  //Requires a JSON"_id"
  
  editCollab(collabData: CollabModel, id: string){
      let date = new Date(collabData.date).getTime();
      let duration = new Date(collabData.duration).getTime();
      console.log("duration:" + duration);

      const body = {
          id : id,
          size : collabData.size,
          date : date,
          duration : duration,
          location : collabData.location,
          title: collabData.title,
          description: collabData.description,
          classes: collabData.classes,
          skills: collabData.skills,
          applicants  : collabData.applicants
      }
      return this.http.post(this.rootUrl + "/collab/editCollab",body)
  }

    
    


}

