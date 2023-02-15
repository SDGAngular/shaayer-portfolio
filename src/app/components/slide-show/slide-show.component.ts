import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
@Input() pictureList:any=[];
slideIndex=0;

ngOnInit():void{
this.showSlides(0);
}

currentSlide(n:number):void{
  this.showSlides(n);
}

showSlides(n:any):void{

  if(n<0){
    return
  }

  if (n >= this.pictureList.length) {this.slideIndex = 0;return};

  this.slideIndex=n;

  





}


}
