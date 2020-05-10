import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listdons } from 'src/app/list-dons';
import { ListDonsService } from '../../services/list-dons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ListDonsService]
})
export class HomeComponent implements OnInit {
  Listdons: Listdons[];
  constructor(private router: Router,private ListDonsService: ListDonsService) { }

  ngOnInit() {
    this.ListDonsService.getList_dons()
    .subscribe(Listdons =>
    this.Listdons = Listdons);
  }

  sendMeCategories(){
    this.router.navigate(['/Categories']);
  }

  sendMeAssociations(){
    this.router.navigate(['/AssociationMap']);
  }

  sendMeDonneLivre(){
    this.router.navigate(['Don-livres']);
  }
  sendMeDonneMeuble(){
    this.router.navigate(['Don-meubles']);
  }

  sendMeDonneVetement(){
    this.router.navigate(['Don-vetements']);
  }

}
