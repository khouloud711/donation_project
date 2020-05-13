import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { User } from '../../user';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;

  email: string;
  password: string;
  firstname:string;
  lastname: string;
  number: number;


  loginUserData ={
    email:this.email,
    password:this.password,
    firstname:this.firstname,
    lastname:this.lastname,
    number:this.number
  }

  constructor(private router: Router, private _auth: AuthService,
                              public fb: FormBuilder) {

                                this.signinForm = this.fb.group({
                                  email: [''],
                                  password: ['']
                              })
                            }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.signinForm.value)
  }
  /*loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/user-profile/'])

      },
      err => {
        console.log(err)
      }
    )
  }*/






}
