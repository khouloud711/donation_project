import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-don-livres',
  templateUrl: './don-livres.component.html',
  styleUrls: ['./don-livres.component.css']
})
export class DonLivresComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
