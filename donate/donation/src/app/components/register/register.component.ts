import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../user';
import { FormBuilder, FormGroup } from '@angular/forms';

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



  signupForm: FormGroup;

  constructor(private router: Router, private _auth: AuthService,
                              public fb: FormBuilder) {

                                this.signupForm = this.fb.group({
                                  firstname: [''],
                                  lastname: [''],
                                  email: [''],
                                  number: [''],
                                  password: ['']
                                })
                              }

  ngOnInit(): void {
  }
  registerUser() {
    this._auth.registerUser(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        this.signupForm.reset()
        localStorage.setItem('token', res.token)

      }
      this.router.navigate(['/login'])
    })
  }
  /*registerUser(){
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this.router.navigate(['/login'])
        },
        err => console.log(err)
      )
  }*/

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
