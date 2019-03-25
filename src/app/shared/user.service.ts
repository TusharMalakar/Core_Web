import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

import { HttpErrorResponse } from '@angular/common/http';
import {Router } from '@angular/router';
import { settings } from 'cluster';



@Injectable()
export class UserService {
  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient) { }

  registerUser(username, password ) {
    const body: User = {

      _id : '',
      UserName: username,
      Password: password,
      github : '',
      linkedin : ' ',
      skills : ' ',
      classess : '',
      profilePicture : ' '

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    var requestedUrl = this.rootUrl + "/user?username="+username+"&password="+password;
    console.log(requestedUrl);
    
    return this.http.put(requestedUrl , body,{headers : reqHeader});
  }

  //"/user?username="+UserName+"&password="password

  userAuthentication(userName, password) {
    return this.http.get(this.rootUrl +"/auth/login?"+"username="+userName+"&password="+password);
  }

  //cookies
  private cookies = localStorage.getItem('token');
   
  getUserdetails(){

    //get(url: string, options?: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean; }): 
    //{headers : new HttpHeaders({'Authorization': 'Bearer '+ localStorage.getItem('token') })}  
    return this.http.get(   this.rootUrl +"/user?"
      ,{headers : new HttpHeaders({'Authorization': 'Basic '+ this.cookies })} );
  }

}
