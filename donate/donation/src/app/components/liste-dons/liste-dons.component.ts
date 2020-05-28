import { Component, OnInit } from '@angular/core';
import { Listdons } from '../../list-dons';
import { Router, ActivatedRoute } from '@angular/router';
import { ListDonsService } from '../../services/list-dons.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-liste-dons',
  templateUrl: './liste-dons.component.html',
  styleUrls: ['./liste-dons.component.css'],
  providers:[ListDonsService]
})
export class ListeDonsComponent implements OnInit {
  Listdons: Listdons[];
  user: User[];


  constructor(private router: Router,private route: ActivatedRoute,private ListDonsService: ListDonsService) { }

  ngOnInit() {
    this.ListDonsService.getList_dons()
    .subscribe(Listdons =>
    this.Listdons = Listdons);
  }

}
