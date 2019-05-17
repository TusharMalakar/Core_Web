import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { ConversationModel } from '../models/conversation.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Requirements } from 'src/app/home/collab-card/collab-card.component';


@Injectable()
export class UserService {
  readonly rootUrl = 'http://13.58.204.157:5000';
  constructor(private http: HttpClient) { }
  
  getToken(){
    return localStorage.getItem('accessToken')
  }

  //"/user?username="+UserName+"&password="password
  userAuthentication(userName: string, password: string) {
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.rootUrl +"/auth/login?"+"username="+userName+"&password="+password, {headers : reqHeader});
  }

  registerUser(username, password) {
    const body: UserModel = {
      username: username,
      password: password,
    }

    //This request does not need authorization 
    var reqHeader = new HttpHeaders({'No-Auth':'True'});

    //Adding Parameters
    var requestedUrl = this.rootUrl + "/user?username="+username+"&password="+password;

    //Testing url 
    //console.log(requestedUrl);

    //requestUrl: endpoint
    //body: Needed, but not used
    //{headers : reqHeader} : Creating object from the header library; set to non-auth 
    return this.http.put(requestedUrl , body, {headers : reqHeader});
  }

  public isAuthenticated() : boolean {
    return localStorage.getItem('accessToken') !== null;
  }
 //url + json authentication
 getUserdetails(): Observable<UserModel> {
  return this.http.get<UserModel>( this.rootUrl +"/user");
  }

  getMemberdetails(username: string): Observable<UserModel> {
    return this.http.get<UserModel>( this.rootUrl +"/user/" + username);
  }

  getConversations(): Observable<ConversationModel[]> {
    return this.http.get<ConversationModel[]>( this.rootUrl + "/messaging/myConvos" );
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
    
    xAxisReq = xAxisReq.concat(classes);

    return xAxisReq;
  }

searchSkills(constrain: string): Observable<any>{
  let params = new HttpParams().set("query",constrain);
  return this.http.get(this.rootUrl +"/search/skills",{params: params});
}

searchClasses(constrain: string): Observable<any>{
  let params = new HttpParams().set("query",constrain);
  return this.http.get(this.rootUrl +"/search/classes",{params: params});
}

getPicture(){
  return this.http.get(this.rootUrl + "/user/profilePicture", {responseType: 'text'});
}

getMemberPicture(username: string){
  return this.http.get( this.rootUrl +"/user/profilePicture?username=" + username , {responseType: 'text'});
}

uploadProfilePicture(fileToUpload: File){
  const formData: FormData = new FormData();
  formData.append('pic', fileToUpload, fileToUpload.name);
  return this.http.post(this.rootUrl+"/user/profilePicture", formData)
}

// /collab/deleteCollab 
///collab/getRecommendedCollab

  //___________POST_________________

//you can update user profile taking all these as input but "Not required"

updateUserProfile(userData: UserModel){
  const body : UserModel ={
    name : userData.username,
    github  : userData.github,
    linkedin: userData.linkedin,
  }
  return this.http.post(this.rootUrl +"/user", body)
}

updateUserSkills(skills){
  const body : UserModel ={
    skills  :skills,
    
  }
  //console.log(body)
  return this.http.post(this.rootUrl +"/user", body)
}

updateUserclass(classes){
  const body : UserModel ={
    classes:classes
  }
  //console.log(body)
  return this.http.post(this.rootUrl +"/user", body)

}


}
