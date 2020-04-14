import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()


export class ListDonsService {

  constructor(private http: Http) { }

   //retreiving listdonService
   getList_dons(){
    return this.http.get('http://localhost:3000/api/list_dons')
      .map(res => res.json());
  }

  //add listdon method
  addList_dons(newlist_dons){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/donner',newlist_dons,{headers:headers})
      .map(res => res.json());
  }

}


