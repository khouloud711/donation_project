import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

const apiUrl = environment.apiUrl ;


@Injectable()


export class ListDonsService {

  endpoint: string = apiUrl+"/post";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: Http,
            private httpClient : HttpClient) { }


  //add listdon method
  addDon(newDon){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post(apiUrl+'/post/donner',newDon,{headers:headers})
      .map(res => res.json());
  }

   //retreiving listdonService
   getHomeList_dons() : Observable <any[]>{
    return this.httpClient.get<any[]>(apiUrl+'/post/list_dons/home') ;

  }
   //retreiving listdonService
   getList_dons() : Observable <any[]>{
    return this.httpClient.get<any[]>(apiUrl+'/post/list_dons') ;

  }

  /***************Updating***************** */

  updateDescription(id, data): Observable<any> {
    let url = `${this.endpoint}/update-description/${id}`;
    return this.httpClient.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  updateCateg(id, data): Observable<any> {
    let url = `${this.endpoint}/update-categ/${id}`;
    return this.httpClient.put(url, data, { headers: this.headers }).pipe(
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
}



