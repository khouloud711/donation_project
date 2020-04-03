import { Component, OnInit } from '@angular/core';
import { Listlivres } from '../list-livres';
import { Router, ActivatedRoute } from '@angular/router';
//import { DonLivresComponent } from '../don-livres/don-livres.component';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']

})
export class ListLivresComponent implements OnInit {
  Listlivres: Listlivres[];

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
