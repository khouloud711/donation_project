import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()


export class ListDonsService {


  constructor(private http: Http) { }


  //add listdon method
  addList_dons(newlist_dons){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('https://donation-app1.herokuapp.com/api/donner',newlist_dons,{headers:headers})
      .map(res => res.json());
  }

   //retreiving listdonService
   getList_dons(){
    return this.http.get('https://donation-app1.herokuapp.com/api/list_dons')
      .map(res => res.json());
  }

}


