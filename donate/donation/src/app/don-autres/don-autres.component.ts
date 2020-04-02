import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-don-autres',
  templateUrl: './don-autres.component.html',
  styleUrls: ['./don-autres.component.css']
})
export class DonAutresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
