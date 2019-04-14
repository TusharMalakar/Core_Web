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

  //______________POST_REQUEST____________

  ///collab/createCollab
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


}


/**
 
 COLLABS 

owner: String, The username who owns the Collab
size: Int, The maximum amount of users in a Collab
members: Array of Strings, Array of the users in the Collab, including the owner
date: Int, Date collaboration was posted in milliseconds
duration: Int, Amount of time before the Collab automatically archives.
location: String, Some location of the Collab.
status: Bool, True means active, false means archived. For searching
title: String, Title of the Collab
description: String, Description of the Collab
classes: Array of strings, Array of classes specified desired for the Collab
skills: Array of strings, Array of skills specified desired for the Collab
applicants: Array of strings, Array of users applying to the Collab


All the following endpoints are protected. “id” when required, refers to the string variable of the respective Collab’s object id.

/collab/createCollab (POST)
Requires a JSON object with "size", “date” (long, in milliseconds), “duration”, "location", "title", "description", "classes", "skills" sent and creates a Collab.

"owner" and "member" are based on the user sending the request. "date", "status", "applicants" are automatically filled out. “duration” is entered by the user

Returns "'success': True" on success.


 */
