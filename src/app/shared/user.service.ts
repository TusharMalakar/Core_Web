import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';




@Injectable()
export class UserService {
  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient) { }
  private AccessToke = localStorage.getItem('capstoneAuth');
  registerUser(username, password ) {
    const body: User = {
      UserName: username,
      password: password,
      github : '',
      linkedin : ' ',
      skills : [],
      classes : [],
      name : ''

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    var requestedUrl = this.rootUrl + "/user?username="+username+"&password="+password;
    console.log(requestedUrl);

    return this.http.put(requestedUrl , body,{headers : reqHeader});
  }

  //"/user?username="+UserName+"&password="password
  userAuthentication(userName: string, password: string) {
    return this.http.get(this.rootUrl +"/auth/login?"+"username="+userName+"&password="+password);
  }

public isAuthenticated() : boolean {
  return localStorage.getItem('capstonAuth') !== null;
}
 //url + json authentication
 getUserdetails(){
  return this.http.get( this.rootUrl +"/user");
}
// getPicture(){
//   // user/profilePicture
//   return this.http.get( this.rootUrl +"/user/profilePicture");
// }
getSkill(){ 
  return this.http.get( this.rootUrl +"/user/skills");
}
getClasses(){ 
  return this.http.get( this.rootUrl +"/user/classes");
}
//search/skills:
searchSkills(){ 
  return this.http.get( this.rootUrl +"/search/skills");
}
//collab/getCollabDetails
collabDetails(){ 
  return this.http.get( this.rootUrl +"/collab/getCollabDetails");
}
//collab/getAllCollabs
allCollabs(){ 
  return this.http.get( this.rootUrl +"/collab/getAllCollabs");
}
//collab/getActiveCollabs 
activeCollabs(){ 
  return this.http.get( this.rootUrl +"/collab/getActiveCollabs");
}
//messaging/myConvos
myCollabs(){ 
  return this.http.get( this.rootUrl +"/messaging/myConvos");
}

//___________POST_________________

// /collab/deleteCollab
///collab/editCollab
///collab/joinCollab 
//collab/leaveCollab 
///collab/getRecommendedCollabs
///messaging/getMessages 
///messaging/sendMessage 

}
//testuser1@myhunter.cuny.edu  