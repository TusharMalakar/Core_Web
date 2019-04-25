import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Requirements } from 'src/app/home/collab-card/collab-card.component';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/throw';


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

  getUserSkills(userName: string) { 
    return this.http.get( this.rootUrl + "/user/skills/" + userName).toPromise();
  }

  getUserClasses(userName: string){ 
    return this.http.get( this.rootUrl +"/user/classes/" + userName).toPromise();
  }

  async getUserSkillsAndClasses(username: string){
    
    let xAxisReq: Array<string> = [];
    let classes: string[];
    let skills: string[];

    await this.getUserSkills(username).then(function(result){
      xAxisReq = result["skills"];
    });

    await this.getUserClasses(username).then(function(result){
      classes = result["classes"];
    });
    
    
    /*
    for(let classTaken of classes){
        xAxisReq.push({
        skillOrClass: classTaken,
        type: "class"
      });
    }
    for(let skill of skills){
      xAxisReq.push({
      skillOrClass: skill,
      type: "skill"
    });
  }
  */

    return xAxisReq;
  }

searchSkills(constrain: string): Observable<any>{
  let params = new HttpParams().set("query",constrain);
  return this.http.get(this.rootUrl +"/search/skills",{params: params});
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
    skills  :skills,
    
  }
  console.log(body)
  return this.http.post(this.rootUrl +"/user", body)

}
updateUserclass(classes){
  const body : UserModel ={
    classes:classes
  }
  console.log(body)
  return this.http.post(this.rootUrl +"/user", body)

}

//download profile-picture as Bold file
getPicture(): Observable <Blob>{
  // user/profilePicture
  return this.http.get( this.rootUrl +"/user/profilePicture",  { responseType: 'blob' })
  .catch(this.errorhandler);
}

uploadProfilePicture(fileToUpload: File){
  const formData: FormData = new FormData();
  formData.append('pic', fileToUpload, fileToUpload.name);
  return this.http.post(this.rootUrl+"/user/profilePicture", formData)
}

//it will split usename by "@" and return "First.Last" of user
gertFirstandLastName(username : UserModel["username"]){
  let str = username
  let result = str.split('@')
  console.log(result[0]);
  return result[0];
}

//Http error handler 
errorhandler(error:HttpErrorResponse){
  var str="error"
  return Observable.throw(error.message || "server Error")
}

}
