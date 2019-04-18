import { UserModel } from './../models/user.model';
import { CollabModel } from './../models/collab.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient) { }
  
  getToken(){
    return localStorage.getItem('accessToken')
  }

  //"/user?username="+UserName+"&password="password
  userAuthentication(userName: string, password: string) {
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.rootUrl +"/auth/login?"+"username="+userName+"&password="+password, {headers : reqHeader});
  }

  registerUser(username, password ) {
    const body: UserModel = {
      username: username,
      password: password,
    }
    //This request does not need authorization 
    var reqHeader = new HttpHeaders({'No-Auth':'True'});

    //Adding Parameters
    var requestedUrl = this.rootUrl + "/user?username="+username+"&password="+password;

    return this.http.put(requestedUrl , body, {headers : reqHeader});
  }

public isAuthenticated() : boolean {
  return localStorage.getItem('accessToken') !== null;
}
 //url + json authentication
getUserdetails(): Observable<UserModel[]> {
  return this.http.get<UserModel[]>( this.rootUrl +"/user");
}

getClasses(){ 
  return this.http.get( this.rootUrl +"/user/classes");
}
getSkill(){ 
  return this.http.get( this.rootUrl +"/user/skills");
}

//return the list of skills already in the database
searchSkills(){
  return this.http.get(this.rootUrl +"/search/skills")
}
//return the list of classes already in the database
searchClasses(){
  return this.http.get(this.rootUrl +"/search/classes")
}



//download profile-picture as Bold file
getPicture(): Observable <Blob>{
  // user/profilePicture
  return this.http.get( this.rootUrl +"/user/profilePicture",  { responseType: 'blob' });
}





//___________POST_________________

//you can update user profile taking all these as input but "Not required"
updateUserProfile(github,linkedin, skills, classes){
  const body : UserModel ={
    github  :github,
    linkedin:linkedin,
    skills  :skills,
    classes :classes
  }
  return this.http.post(this.rootUrl +"/user", body)
}

updateUserSkill(skills){
  const body : UserModel ={
    github  :'',
    linkedin:'',
    skills  :skills,
    classes :[]
  }
  console.log(body)
  return this.http.post(this.rootUrl +"/user", body)

}

// /collab/deleteCollab 
///collab/getRecommendedCollabs
///messaging/getMessages 
///messaging/sendMessage 

}