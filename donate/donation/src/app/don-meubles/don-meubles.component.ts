import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-don-meubles',
  templateUrl: './don-meubles.component.html',
  styleUrls: ['./don-meubles.component.css']
})
export class DonMeublesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
