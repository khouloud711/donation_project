import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  email: string;
  password: string;

  loginUserData ={
    email:this.email,
    password:this.password
  }

  constructor(private router: Router,public _authService: AuthService) { }

  ngOnInit(): void {
  }


}
