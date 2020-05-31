import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../user';
import { RequestOptions, Http } from '@angular/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl ;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = apiUrl+"/auth/register";
  private _loginUrl = apiUrl+"/auth/login";
  private _currentUser = apiUrl+"/auth/"
  endpoint: string = apiUrl+"/auth";

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
        localStorage.setItem('_id',res._id)
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
  getId(){
    return  localStorage.getItem('_id');
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

