import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname:string;
  lastname: string;
  email: string;
  number: number;
  password: string;

   registerUserData ={
    firstname:this.firstname,
    lastname:this.lastname,
    email:this.email,
    password:this.password,
    number:this.number
  }
  //User: User[];




  constructor(private router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/login'])
        },
        err => console.log(err)
      )
  }
  /*registerUser(){
    const newUser={
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      password:this.password,
      number:this.number
    }
    this._auth.registerUser(newUser)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token),
        this.router.navigate(['/login'])
      },
      err => {
        console.error(err);
      }
    )
  }*/


}
