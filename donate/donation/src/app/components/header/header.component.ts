import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router,public _authService: AuthService) { }

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

  sendMeContact(){
    this.router.navigate(['/Contact']);
  }

  /*sendMeList_livres(){
    this.router.navigate(['/list_livres']);
  }*/
}
