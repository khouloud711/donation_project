import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
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

  sendMeDonneProduit(){
    this.router.navigate(['Don-produits']);
  }

  sendMeDonneMateriel(){
    this.router.navigate(['Don-materiels']);
  }

  sendMeDonneAutre(){
    this.router.navigate(['Don-autres']);
  }

}
