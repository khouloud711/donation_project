import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ListLivresService {

  constructor(private http: Http) { }

  //retreiving listlivreService
  getList_livres(){
    return this.http.get('http://localhost:3000/api/list_livres')
      .map(res => res.json());
  }

  //add listlivre method
  addList_livres(newlist_livres){
    var headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/don-livres',newlist_livres,{headers:headers})
      .map(res => res.json());
  }

}


