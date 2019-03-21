import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';


@Injectable()
export class UserService {
  readonly rootUrl = 'https://huntercollabapi.herokuapp.com';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {

      _id : user._id,
      UserName: user.UserName,
      Password: user.Password,
      github : user.github,
      linkedin : user.linkedin,
      skills : user.skills,
      classess : user.classess,
      profilePicture : user.profilePicture

    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/User/Register', body,{headers : reqHeader});
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.get(this.rootUrl +"/auth/login?"+"username="+userName+"&password="+password);
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }

}
