import { Component, OnInit } from '@angular/core';
import { Listdons } from '../list-dons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-dons',
  templateUrl: './liste-dons.component.html',
  styleUrls: ['./liste-dons.component.css']
})
export class ListeDonsComponent implements OnInit {
  Listdons: Listdons[];

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
