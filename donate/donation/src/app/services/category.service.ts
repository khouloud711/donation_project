import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl ;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: Http,
    private httpClient : HttpClient) { }

    //retreiving categoryService
   getCategories() : Observable <any[]>{
    return this.httpClient.get<any[]>(apiUrl+'/category/categories') ;

  }
}









