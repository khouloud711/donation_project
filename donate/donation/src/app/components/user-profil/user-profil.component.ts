import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  firstname: string;
  lastname:string;
  number:number;

  loginUserData ={
    email:this.email,
    //password:this.password
  }
  Listdons: Listdons[];

  currentUser=   {
    email:this.email,
    firstname:this.firstname,
    lastname:this.lastname,
    number:this.number
  };


  constructor(private router: Router,public _authService: AuthService,
              private ListDonsService: ListDonsService,
              private activatedRoute: ActivatedRoute) {

                let id = this.activatedRoute.snapshot.paramMap.get('id');
                this._authService.getUserProfile(id).subscribe(res => {
                  this.currentUser = res.msg;
                })
              }





  ngOnInit() {
    this.ListDonsService.getList_dons()
    .subscribe(Listdons =>
    this.Listdons = Listdons);
  }


}
