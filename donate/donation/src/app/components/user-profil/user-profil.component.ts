import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ListDonsService } from 'src/app/services/list-dons.service';
import { Listdons } from 'src/app/list-dons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css'],
  providers:[ListDonsService]
})
export class UserProfilComponent implements OnInit {
  editForm: FormGroup;
  editFName: FormGroup;
  editLName: FormGroup;
  editNumber: FormGroup;
  editEmail: FormGroup;


  userData: User[];



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
              private activatedRoute: ActivatedRoute,
              public fb: FormBuilder) {

                let id = this.activatedRoute.snapshot.paramMap.get('id');
                this._authService.getUserProfile(id).subscribe(res => {
                  this.currentUser = res.msg;
                })


                this.editForm = this.fb.group({
                  firstname: [''],
                  lastname: [''],
                  email: [''],
                  number: ['']
                })
                this.editFName = this.fb.group({firstname: ['']})
                this.editLName = this.fb.group({lastname: ['']})
                this.editEmail = this.fb.group({email: ['']})
                this.editNumber = this.fb.group({number: ['']})
              }





  ngOnInit() {
    this.ListDonsService.getList_dons()
    .subscribe(Listdons =>
    this.Listdons = Listdons);
  }

  /*updateUser() {
    this.editForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      number: ['']
    })
  }*/





  updateFName(){
    if (!this.editFName.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this._authService.updateFName(id, this.editFName.value)
          .subscribe(res => {
            this.router.navigate[('')];
            alert('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
/**** */
updateLName(){
  if (!this.editLName.valid) {
    return false;
  } else {
    if (window.confirm('Are you sure?')) {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this._authService.updateLName(id, this.editLName.value)
        .subscribe(res => {
          this.router.navigate[('')];
          alert('Content updated successfully!')
        }, (error) => {
          console.log(error)
        })
    }
  }
}
/****** */
updateEmail(){
  if (!this.editEmail.valid) {
    return false;
  } else {
    if (window.confirm('Are you sure?')) {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this._authService.updateEmail(id, this.editEmail.value)
        .subscribe(res => {
          this.router.navigate[('')];
          alert('Email updated successfully!')
        }, (error) => {
          console.log(error)
        })
    }
  }
}
/******* */
updateNumber(){
  if (!this.editNumber.valid) {
    return false;
  } else {
    if (window.confirm('Are you sure?')) {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this._authService.updateNumber(id, this.editNumber.value)
        .subscribe(res => {
          this.router.navigate[('')];
          alert('phone number updated successfully!')
        }, (error) => {
          console.log(error)
        })
    }
  }
}
}
