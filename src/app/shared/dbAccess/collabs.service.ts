import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollabsService {

  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient) { }

  //collab/getActiveCollabs 
activeCollabs(){ 
  
  return this.http.get( this.rootUrl +"/collab/getActiveCollabs");
}
}

