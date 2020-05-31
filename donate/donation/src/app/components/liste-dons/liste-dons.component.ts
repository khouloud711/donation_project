import { Component, OnInit } from '@angular/core';
import { Listdons } from '../../list-dons';
import { Router, ActivatedRoute } from '@angular/router';
import { ListDonsService } from '../../services/list-dons.service';
import { CategoryService } from '../../services/category.service';
import { User } from 'src/app/user';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-liste-dons',
  templateUrl: './liste-dons.component.html',
  styleUrls: ['./liste-dons.component.css'],
  providers:[ListDonsService]
})
export class ListeDonsComponent implements OnInit {
  Listdons: Listdons[];
  categ: Category[];
  user: User[];


  constructor(private router: Router,private route: ActivatedRoute,
              private ListDonsService: ListDonsService,
              private CategoryService: CategoryService) { }

  ngOnInit() {
    this.ListDonsService.getList_dons()
    .subscribe(Listdons =>{

      console.log('data'+ JSON.stringify(Listdons))
    this.Listdons = Listdons

    });


  }

}
