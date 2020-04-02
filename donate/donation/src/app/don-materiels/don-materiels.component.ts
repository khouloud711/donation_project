import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-don-materiels',
  templateUrl: './don-materiels.component.html',
  styleUrls: ['./don-materiels.component.css']
})
export class DonMaterielsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
