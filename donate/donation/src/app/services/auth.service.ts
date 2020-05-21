import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../user';
import { RequestOptions, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "https://donation-app1.herokuapp.com/api/register";
  private _loginUrl = "https://donation-app1.herokuapp.com/api/login";
  private _currentUser = "http://localhost:3000/api/"
  endpoint: string = "https://donation-app1.herokuapp.com/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};


  constructor(private http: HttpClient,private _http: Http, private router: Router) { }

  registerUser(user: User): Observable<any> {
    let api = this._registerUrl;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }
  /*registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }*/

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


 /******************************/

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
/******************************/

getCurrentuser():Observable<any>{
 return this.http.get<any>(this._currentUser, {headers: this.headers})
}

/******************************/
updateFName(id, data): Observable<any> {
  let url = `${this.endpoint}/update-firstname/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )

}
updateLName(id, data): Observable<any> {
  let url = `${this.endpoint}/update-lastname/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )

}
updateEmail(id, data): Observable<any> {
  let url = `${this.endpoint}/update-email/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )

}
updateNumber(id, data): Observable<any> {
  let url = `${this.endpoint}/update-number/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  )

}

// Error handling
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
/******************************/


}

