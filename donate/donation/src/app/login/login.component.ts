import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;

  loginUserData ={
    email:this.email,
    password:this.password
  }

  constructor(private router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/profil'])
      },
      err => {
        console.log(err)
      }
    )
  }


  /*loginUser(){

    this._auth.loginUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token),
          this.router.navigate(['/donner'])
        }
        /*err => {
          console.error(err);
        }
      )
  }*/



}
