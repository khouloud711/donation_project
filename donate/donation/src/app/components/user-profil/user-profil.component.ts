import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ListDonsService } from 'src/app/services/list-dons.service';
import { Listdons } from 'src/app/list-dons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/user';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/category';

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

  editDesc: FormGroup;
  editCateg: FormGroup;
  categorySelected:string;

  userData: User[];
  user: User[];


  email: string;
  firstname: string;
  lastname:string;
  number:number;

  loginUserData ={
    email:this.email,
    //password:this.password
  }
  Listdons: Listdons[];
  Category: Category[];


  currentUser=   {
    email:this.email,
    firstname:this.firstname,
    lastname:this.lastname,
    number:this.number
  };


  constructor(private router: Router,public _authService: AuthService,
              private ListDonsService: ListDonsService,
              private CategoryService: CategoryService,
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
                  number: [''],
                  description:[''],
                  categorySelected:['']
                })
                this.editFName = this.fb.group({firstname: ['']})
                this.editLName = this.fb.group({lastname: ['']})
                this.editEmail = this.fb.group({email: ['']})
                this.editNumber = this.fb.group({number: ['']})
                this.editCateg = this.fb.group({categorySelected: ['']})
                this.editDesc = this.fb.group({description: ['']})
              }





  ngOnInit() {
    this.ListDonsService.getList_dons()
    .subscribe(Listdons =>{
      console.log('Dons'+ JSON.stringify(Listdons))
      this.Listdons = Listdons
    });



    this.CategoryService.getCategories()
    .subscribe(Category =>{
      console.log('data'+ JSON.stringify(Category))
    this.Category = Category

    });
  }

  /*updateUser() {
    this.editForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      number: ['']
    })
  }*/



/*************Update a user infos********************** */

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


/***************Update a don*************** */
updateDescription(){
  if (!this.editDesc.valid) {
    return false;
  } else {
    if (window.confirm('Are you sure?')) {
      let id = this.activatedRoute.snapshot.paramMap.get('id');/*lezmni id mta3 don adheka*/
      this.ListDonsService.updateDescription(id, this.editDesc.value)
        .subscribe(res => {
          this.router.navigate[('')];
          alert('Content updated successfully!')
        }, (error) => {
          console.log(error)
        })
    }
  }
}
updateCateg(){
  if (!this.editCateg.valid) {
    return false;
  } else {
    if (window.confirm('Are you sure?')) {
      let id = this.activatedRoute.snapshot.paramMap.get('id');/*lezmni id mta3 don adheka*/
      this.ListDonsService.updateCateg(id, this.editCateg.value)
        .subscribe(res => {
          this.router.navigate[('')];
          alert('Content updated successfully!')
        }, (error) => {
          console.log(error)
        })
    }
  }
}

}
