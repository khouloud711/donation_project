import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listdons } from '../list-dons';
import { ListDonsService } from '../list-dons.service';

@Component({
  selector: 'app-donne-moi',
  templateUrl: './donne-moi.component.html',
  styleUrls: ['./donne-moi.component.css'],
  providers:[ListDonsService]
})
export class DonneMoiComponent implements OnInit {
  Listdons: Listdons[];
  list_don: Listdons;

  categ:string;
  nom: string;
  prenom: string;
  numero:number;
  description: string;
  /*img:ImageData*/

  constructor( private router: Router,private ListDonsService: ListDonsService) { }

  ngOnInit() {

  }

  addList_dons(){
    const newlist_dons={
      categ:this.categ,
      nom:this.nom,
      prenom:this.prenom,
      numero:this.numero,
      description:this.description
    }
    this.ListDonsService.addList_dons(newlist_dons)
      .subscribe(list_don=> {
        this.Listdons.push(list_don);
      });

    this.router.navigate(['/listeDons']);

  }

}
