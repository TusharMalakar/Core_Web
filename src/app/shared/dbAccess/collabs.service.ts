import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollabModel } from '../models/collab.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollabsService {

  readonly rootUrl = 'http://13.58.204.157:5000';
  constructor(private http: HttpClient) { }

  /**
  * 
  * @author Edwin Quintuna
  * 
  *	@deprecated , Not used.
  */
  collabDetails(){ 
    return this.http.get( this.rootUrl +"/collab/getCollabDetails");
  }
  /**
  * 
  * @author Edwin Quintuna
  * 
  *	@deprecated , Not used.
  */
  allCollabs(): Observable<CollabModel[]> { 
    return this.http.get<CollabModel[]>( this.rootUrl +"/collab/getAllCollabs");
  }
  
  /**
  * 
  * @author Edwin Quintuna
  * 
  *	@deprecated , Not used.
  */
  activeCollabs(){ 
    return this.http.get( this.rootUrl +"/collab/getActiveCollabs");
  }
  
  /**
  * 
  * @author Edwin Quintuna
  * 
  *	@deprecated , Not used.
  */
  myCollabs(){ 
    return this.http.get( this.rootUrl +"/messaging/myConvos");
  }

  /**
  * @author Edwin Quintuna
  * 
  *	@brief , Function that retrieve collaboration depending on the category specified by 'collabType'.
  * @param['collabType'] , string that specifies the type of collab that needs to be retrieved from the database
  *
  *	@return Observable with server response containing an array with a list of collaborations.
  */
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

      console.log(collabData);
      const body = {
          id : id,
          size : collabData.size,
          date : collabData.date,
          duration : collabData.duration,
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

