import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donne-moi',
  templateUrl: './donne-moi.component.html',
  styleUrls: ['./donne-moi.component.css']
})
export class DonneMoiComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  sendMeCategories(){
    this.router.navigate(['/Categories']);
  }
}
