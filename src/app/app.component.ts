import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shaayer-portfolio';

  ngOnInit():void{
    console.log(window.innerWidth);
    if(window.innerWidth<600){
      sessionStorage.setItem('isMobile',JSON.stringify(true))
    }
    else{
      sessionStorage.setItem('isMobile',JSON.stringify(false))
    }
  }

}
