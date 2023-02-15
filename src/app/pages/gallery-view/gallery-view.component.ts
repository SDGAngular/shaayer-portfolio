import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent  implements OnInit{
pictureList:any =[]
title:string='';

ngOnInit(): void {
  const getItem:any = sessionStorage.getItem('gallery');
  this.pictureList= JSON.parse(getItem);
  this.title = this.pictureList.title
  this.pictureList = this.pictureList.pictureList;

}



}
