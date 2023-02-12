import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
imagesSource = [
  ".../../../../../assets/images/facebook.png",
  ".../../../../../assets/images/google.png",
  ".../../../../../assets/images/instagram.png",
  ".../../../../../assets/images/instagram.png",
  ".../../../../../assets/images/nike.png",
  ".../../../../../assets/images/twitter.png",
  ".../../../../../assets/images/google.png",


]
  ngOnInit(): void {
   
  }

}
