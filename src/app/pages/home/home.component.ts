import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';





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
  homeScreenDetails:any ={}
  selectedAbTab:string='expertise';
  experienceList:any=[]; 
  typingList = ['Travel Photographer', 'Street Photographer','Wedding and Portrait Photographer']

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private http: HttpClient){}
  ngOnInit(): void {

   this.homeScreenDetails = this.activatedRoute.snapshot.data['homeDeatils'];
   console.log(this.homeScreenDetails)

this.setAboutMe(this.homeScreenDetails.aboutMe)
   
    
  
  }


  goToGallery(eachWork:any):void{

    sessionStorage.setItem('gallery',JSON.stringify(eachWork));
    this.router.navigate(['gallery']);

  }

  setAboutMe(aboutMe:any):void{

    let counter =0;
    let ls:any=[]
    aboutMe.experience.forEach((eachExperience:any,index:number) => {

      if(counter===3 || index===aboutMe.experience.length-1){
        counter=0;
        this.experienceList.push(ls);
        ls=[];

      }
      else{
        ls.push(eachExperience);
        counter++;
      }
      
    });

    console.log(this.experienceList);

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
  

  captureFormData(event:Event):void
  {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzoaY_8Sevjsu4QUg0M19gr87FGD-D3LAM-qO8YUfP1G8QXkMSBW-aT1QMtLGnz_jUMjg/exec';
    const form :any= (document.forms as any)['submit-to-google-sheet']
event.preventDefault();
    const body = new FormData(form)
    this.http.post(scriptURL,body).subscribe((data:any)=>{
    })

    // console.log(new FormData(form))
    // fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // .then(response => console.log('Success!', response))
    // .catch(error => console.error('Error!', error.message))
  }

}
