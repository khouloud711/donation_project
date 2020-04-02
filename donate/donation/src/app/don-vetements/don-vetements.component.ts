import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-don-vetements',
  templateUrl: './don-vetements.component.html',
  styleUrls: ['./don-vetements.component.css']
})
export class DonVetementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
