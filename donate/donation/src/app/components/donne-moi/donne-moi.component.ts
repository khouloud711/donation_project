import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listdons } from '../../list-dons';
import { ListDonsService } from '../../services/list-dons.service';
import { CategoryService } from '../../services/category.service';
import { HttpErrorResponse} from '@angular/common/http';
import { Category } from 'src/app/category';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-donne-moi',
  templateUrl: './donne-moi.component.html',
  styleUrls: ['./donne-moi.component.css'],
  providers:[ListDonsService]
})
export class DonneMoiComponent implements OnInit {
  Listdons: Listdons[];
  don: Listdons;

  Category: Category[];
  categ:Category;


  currentUser: User;
  categorySelected:string;

  /*categ:string;
  nom: string;
  prenom: string;
  numero:number;*/
  description: string;
  /*img:ImageData*/

  constructor( private router: Router,private ListDonsService: ListDonsService,
               private CategoryService: CategoryService,
               private activatedRoute: ActivatedRoute,
               public _authService: AuthService,) {

                let id = this.activatedRoute.snapshot.paramMap.get('id');
                this._authService.getUserProfile(id).subscribe(res => {
                  this.currentUser = res.msg;
                })
               }

  ngOnInit() {
    this.CategoryService.getCategories()
    .subscribe(Category =>{

      console.log('data'+ JSON.stringify(Category))
    this.Category = Category

    });
  }

  /*addList_dons(){
    const newlist_dons={
      categ:this.categ,
      nom:this.nom,
      prenom:this.prenom,
      numero:this.numero,
      description:this.description
    }
    this.ListDonsService.addList_dons(newlist_dons)
      .subscribe(list_don=> {
        this.Listdons.push(list_don);
      });

    this.router.navigate(['/listeDons']);

  }*/


  addDon(){
    const newDon={
      categ:this.categorySelected,
      description:this.description,
      user:this._authService.getId()
    }
    console.log(newDon)
    this.ListDonsService.addDon(newDon)
      .subscribe(don=> {
        this.Listdons.push(don);
      },
      err => {
        console.log(err)
      });
  }
}
