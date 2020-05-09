import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ListDonsService } from 'src/app/services/list-dons.service';
import { Listdons } from 'src/app/list-dons';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css'],
  providers:[ListDonsService]
})
export class UserProfilComponent implements OnInit {
  email: string;
  password: string;

  loginUserData ={
    email:this.email,
    password:this.password
  }
  Listdons: Listdons[];
  constructor(private router: Router,public _authService: AuthService,
              private ListDonsService: ListDonsService) { }

  ngOnInit() {
    this.ListDonsService.getList_dons()
    .subscribe(Listdons =>
    this.Listdons = Listdons);
  }


}
