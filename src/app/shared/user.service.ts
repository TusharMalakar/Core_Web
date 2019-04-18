import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';




@Injectable()
export class UserService {
  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient) { }
  
  getToken(){
    return localStorage.getItem('accessToken')
  }

  registerUser(username, password ) {
    const body: User = {
      UserName: username,
      password: password,
    }

    //This request does not need authorization 
    var reqHeader = new HttpHeaders({'No-Auth':'True'});

    //Adding Parameters
    var requestedUrl = this.rootUrl + "/user?username="+username+"&password="+password;

    //Testing url 
    console.log(requestedUrl);

    //requestUrl: endpoint
    //body: Needed, but not used
    //{headers : reqHeader} : Creating object from the header library; set to non-auth 
    return this.http.put(requestedUrl , body, {headers : reqHeader});
  }

  profilePicture() {
    const body: User = {
      UserName: '',
      password: '',
      github : '',
    linkedin : '',
    skills :  [],
    classes : [],
    profilePicture : " "
    }

    //This request does not need authorization 
    var reqHeader = new HttpHeaders({'No-Auth':'True'});

    //Adding Parameters
    var requestedUrl = this.rootUrl + "/user/profilePicture";

    //Testing url 
    console.log(requestedUrl);

    //requestUrl: endpoint
    //body: Needed, but not used
    //{headers : reqHeader} : Creating object from the header library; set to non-auth 
    return this.http.put(requestedUrl , body, {headers : reqHeader});
  }

  //"/user?username="+UserName+"&password="password
  userAuthentication(userName: string, password: string) {
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.rootUrl +"/auth/login?"+"username="+userName+"&password="+password, {headers : reqHeader});
  }

public isAuthenticated() : boolean {
  return localStorage.getItem('accessToken') !== null;
}
 //url + json authentication
 getUserdetails() {
  return this.http.get( this.rootUrl +"/user");
}

//getting picture as Bold file
getPicture(): Observable <Blob>{
  // user/profilePicture
  return this.http.get( this.rootUrl +"/user/profilePicture",  { responseType: 'blob' });
}
//Convert Bolb file into picture
imageToShow: any;
createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}

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