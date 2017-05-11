import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  private title: string;

  constructor() { 
    this.title = "My Albums"
  }

  ngOnInit() {
  }

}
