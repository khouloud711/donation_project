import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  email: string;
  firstname: string;
  lastname:string;
  number:number;



  currentUser=   {
    email:this.email,
    firstname:this.firstname,
    lastname:this.lastname,
    number:this.number
  };
  constructor(private router: Router,public _authService: AuthService,
                    private activatedRoute:ActivatedRoute) {


                  }





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
