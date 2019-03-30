import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { getToken } from '@angular/router/src/utils/preactivation';




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

  
 


//testuser1@myhunter.cuny.edu

    /**
    get(url: string, options: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe?: "body"; params?: HttpParams | { [param: string]: string | string[]; }; reportProgress?: boolean; responseType: "arraybuffer"; withCredentials?: boolean; }): Observable<ArrayBuffer>
    The HTTP options to send with the request.

    Constructs a GET request that interprets the body as an ArrayBuffer and returns the response in an ArrayBuffer.

    @return — An Observable of the response, with the response body as an ArrayBuffer.

    */
   cookies = {headers : new HttpHeaders( {
  
    "Authorization": `Bearer ${localStorage.getItem('capstoneAuth')}`,
    'cache-control': "no-cache"
  })
};
  //url + json authentication
  getUserdetails(){
    //,{"username ": "jane.doe99@myhunter.cuny.edu"}
    console.log(localStorage.getItem('capstoneAuth'));
    return this.http.get( this.rootUrl +"/user?", this.cookies );
  
}


}