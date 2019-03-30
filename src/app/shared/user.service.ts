import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import {Router } from '@angular/router';
import { jsonpCallbackContext } from '@angular/common/http/src/module';




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

  
public isAuthenticated() : boolean {
  return localStorage.getItem('capstonAuth') !== null;
}

 settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://huntercollabapi.herokuapp.com/user",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "Postman-Token": "2b3ca2d6-334e-45fb-a8d5-4b1ce5df8dcf"
  }
}
  
  
  //url + json authentication
  getUserdetails(){
    //,{"username ": "jane.doe99@myhunter.cuny.edu"}
    console.log(localStorage.getItem('capstoneAuth'));
    

    return this.http.get( this.rootUrl +"/user?"  );
    

}

}