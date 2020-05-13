import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  endpoint: string = "http://localhost:3000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};


  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

 /*loginUser(user){
    return this.http.post<any>(this._loginUrl, user)

  }*/
  loginUser(user: User) {
    return this.http.post<any>(this._loginUrl, user)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['user-profile/' + res.msg._id]);
        })
      })
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  getToken(){
    return localStorage.getItem('token');
  }


  /******** */

 // User profile
 getUserProfile(id): Observable<any> {
  let api = `${this.endpoint}/user-profile/${id}`;
  return this.http.get(api, { headers: this.headers }).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.handleError)
  )
}

// Error
handleError(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}



}

