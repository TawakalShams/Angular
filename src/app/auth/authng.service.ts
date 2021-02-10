import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//import { JwtHelper } from 'angular2-jwt';
// import { JwtHelper } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl = 'http://localhost:8080/ims/api';
  errorData: {};

  constructor(private http: HttpClient) { }

  redirectUrl: string;
  // checklogout:boolean;

  login(username: string, password: string) {
    return this.http.post<any>(`${this.serverUrl}/login`, {username: username, password: password})
    .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return false;
      }),
    
  catchError(this.handleError)
 
      
    );
  }


  isLoggedIn() {
    // if (localStorage.getItem('currentUser')) {
    //   return true;
    // }
//    let jwt = new JwtHelper();
    return false;
 
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.token;
  }

  logout() {
      localStorage.removeItem('currentUser');
   
  }

  private handleError(error: HttpErrorResponse) {
    
    // return an observable with a user-facing error message
    this.errorData = {
      
      errorDesc: 'Invalid username or password.'
    };
    return throwError(this.errorData);
  }
}