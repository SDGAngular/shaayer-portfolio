import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  headerList:any= [

    {
      id:'#header',
      value:'Home'
    },
    {
      id:'#about',
      value:'About'
    },
    {
      id:'#services',
      value:'Services'
    },
    {
      id:'#portfolio',
      value:'Categories'
    }
    ,
    {
      id:'#contact',
      value:'Contact'
    }
  ];
  isMenuHidden=false;
  selectedAbTab:string='expertise';
  typingList = ['Travel Photographer', 'Street Photographer','Wedding and Portrait Photographer']
  setSelectedAboutTab(tab:any):void{
    this.selectedAbTab=tab;
    
      }
    
      showMenu(isClose:boolean):void{
        // this.isMenuHidden = isClose;
        const sideBar:HTMLElement | any = document.getElementById('side-bar');
        console.log(sideBar)
        if(isClose){
          sideBar.style.right='0';
        }
        else{
          sideBar.style.right='-800px';
        }
      }
}
