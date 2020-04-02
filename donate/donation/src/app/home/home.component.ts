import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
