import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  sendMeHome(){
    this.router.navigate(['/']);
  }

  sendMeDonneMoi(){
    this.router.navigate(['/Donner']);
  }

  sendMeAssociations(){
    this.router.navigate(['/AssociationMap']);
  }

  sendMeCategories(){
    this.router.navigate(['/Categories']);
  }

  sendMeList_livres(){
    this.router.navigate(['/list_livres']);
  }
}