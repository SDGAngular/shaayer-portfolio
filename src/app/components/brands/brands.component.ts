import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
imagesSource = [



]
@Input() brandImages:any;
  ngOnInit(): void {
   this.imagesSource= this.brandImages;
  }

}
