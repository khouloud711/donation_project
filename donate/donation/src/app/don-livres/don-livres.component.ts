import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listlivres } from '../list-livres';
import { ListLivresService } from '../list-livres.service';

@Component({
  selector: 'app-don-livres',
  templateUrl: './don-livres.component.html',
  styleUrls: ['./don-livres.component.css'],
  providers:[ListLivresService]
})
export class DonLivresComponent implements OnInit {
  Listlivres: Listlivres[];
  list_livre: Listlivres;
  nom: string;
  prenom: string;
  numero:number;
  description: string;

  constructor( private router: Router,private ListLivresService: ListLivresService) { }

  ngOnInit() {
    this.ListLivresService.getList_livres()
    .subscribe(Listlivres =>
    this.Listlivres = Listlivres);
  }

  addList_livres(){
    const newlist_livres={
      nom:this.nom,
      prenom:this.prenom,
      numero:this.numero,
      description:this.description
    }
    this.ListLivresService.addList_livres(newlist_livres)
      .subscribe(list_livre => {
        this.Listlivres.push(list_livre);
      });
  }



}
