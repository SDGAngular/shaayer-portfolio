import { AfterViewInit, Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

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

  ngOnInit(): void {

   
    
  
  }

  ngAfterViewInit(): void {


  //  (<any> $('.brand-carousel')).owlCarousel({
  //     loop:true,
  //     margin:10,
  //     autoplay:true,
  //     responsive:{
  //       0:{
  //         items:1
  //       },
  //       600:{
  //         items:3
  //       },
  //       1000:{
  //         items:5
  //       }
  //     }
  //   }) 
  }

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
