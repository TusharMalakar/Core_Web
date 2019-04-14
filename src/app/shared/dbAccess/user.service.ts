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

    //Testing url 
    console.log(requestedUrl);

    //requestUrl: endpoint
    //body: Needed, but not used
    //{headers : reqHeader} : Creating object from the header library; set to non-auth 
    return this.http.put(requestedUrl , body, {headers : reqHeader});
  }

public isAuthenticated() : boolean {
  return localStorage.getItem('accessToken') !== null;
}
 //url + json authentication
getUserdetails(): Observable<UserModel[]> {
  return this.http.get<UserModel[]>( this.rootUrl +"/user");
}
//download profile-picture as Bold file
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
//picture is ready to display
isImageLoading : boolean;
getImageFromService() {
  this.isImageLoading = true;
  this.getPicture().subscribe(data => {
    this.createImageFromBlob(data);
    console.log(data)
    this.isImageLoading = false;
    console.log(data)
    return data
  })
}

getSkill(){ 
  return this.http.get( this.rootUrl +"/user/skills");
}

updateSkill(skills){
  const body : UserModel ={
    skills : skills
  }
  return this.http.post(this.rootUrl+"user/skills", body)
  .subscribe(data => console.log(data))
}

//search/skills
searchSkills(constrain: string): Observable<any>{
  let params = new HttpParams().set("query",constrain);
  return this.http.get(this.rootUrl +"/search/skills",{params: params});
}

getClasses(){ 
  return this.http.get( this.rootUrl +"/user/classes");
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
// /collab/deleteCollab
///collab/editCollab
///collab/joinCollab 
//collab/leaveCollab 
///collab/getRecommendedCollabs
///messaging/getMessages 
///messaging/sendMessage 

}