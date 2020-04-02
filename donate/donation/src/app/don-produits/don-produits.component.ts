import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-don-produits',
  templateUrl: './don-produits.component.html',
  styleUrls: ['./don-produits.component.css']
})
export class DonProduitsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
