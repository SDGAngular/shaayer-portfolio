import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
   trigger('fade',[
    state('none', style({
      opacity:0
   })),
   state('vis',   style({
     opacity:100
   })),
   transition('none <=> vis',  animate(2000))
   ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  imageRollTimer:any;
  headerList: any = [


    {
      id: '#about',
      value: 'About'
    },
    {
      id: '#brands',
      value: 'Brands'
    },
    {
      id: '#awards',
      value: 'Awards'
    },
    {
      id: '#portfolio',
      value: 'Portfolio'
    },
    {
      id: '#services',
      value: 'Services'
    },
    {
      id: '#workshops',
      value: 'Workshops'
    }
    ,
    {
      id: '#contact',
      value: 'Contact'
    }
  ];
  isMenuHidden = false;
  homeScreenDetails: any = {}
  selectedAbTab: string = 'expertise';
  experienceList: any = [];
  typingList = ['Travel Photographer', 'Street Photographer', 'Wedding and Portrait Photographer']
  displayedWork: any = [];
  horizontalLandingImageList: any = [];
  landingImageIndex: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {

    this.homeScreenDetails = this.activatedRoute.snapshot.data['homeDeatils'];
    console.log(this.homeScreenDetails)

    this.setAboutMe(this.homeScreenDetails.aboutMe)
    this.horizontalLandingImageList = this.homeScreenDetails.landing.verticalImages;
    this.setLandingImage();



  }



  setLandingImage(): void {

   this.imageRollTimer = setInterval(
      () => {
        this.landingImageIndex += 1;
        if (this.landingImageIndex === this.horizontalLandingImageList.length) {
          this.landingImageIndex = 0;
        }
     const image = this.horizontalLandingImageList[this.landingImageIndex ] ;

       const backGroundStyles=(document.getElementById('header') as any).style
       backGroundStyles.opacity=0

       backGroundStyles.background = `url(${this.horizontalLandingImageList[this.landingImageIndex]})`;
       backGroundStyles.backgroundSize = 'cover';
       backGroundStyles.backgroundPosition ='center';
       backGroundStyles.opacity =100;
       
  
      }, 4000
    )

  }


  goToGallery(eachWork: any): void {

    sessionStorage.setItem('gallery', JSON.stringify(eachWork));
    this.router.navigate(['gallery']);

  }
  scrollToSection(eachHeader: any): void {

    const id = eachHeader.id.slice(1,);
    console.log(id);
    const targetSection = document.getElementById(id);
    targetSection?.scrollIntoView()
  }

  setAboutMe(aboutMe: any): void {

    let counter = 0;
    let ls: any = []
    aboutMe.experience.forEach((eachExperience: any, index: number) => {

      if (counter === 3 || index === aboutMe.experience.length - 1) {
        counter = 0;
        this.experienceList.push(ls);
        ls = [];

      }
      else {
        ls.push(eachExperience);
        counter++;
      }

    });

    this.displayedWork = this.homeScreenDetails.work.slice(0, 6);

    console.log(this.experienceList);

  }

  showAllWork(): void {
    this.displayedWork = this.homeScreenDetails.work
  }

  ngAfterViewInit(): void {
  }

  setSelectedAboutTab(tab: any): void {
    this.selectedAbTab = tab;

  }

  showMenu(isClose: boolean): void {
    // this.isMenuHidden = isClose;
    const sideBar: HTMLElement | any = document.getElementById('side-bar');
    console.log(sideBar)
    if (isClose) {
      sideBar.style.right = '0';
    }
    else {
      sideBar.style.right = '-800px';
    }
  }


  captureFormData(event: Event): void {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzoaY_8Sevjsu4QUg0M19gr87FGD-D3LAM-qO8YUfP1G8QXkMSBW-aT1QMtLGnz_jUMjg/exec';
    const form: any = (document.forms as any)['submit-to-google-sheet']
    event.preventDefault();
    const body = new FormData(form)
    this.http.post(scriptURL, body).subscribe((data: any) => {
    })


  }

  ngOnDestroy(): void {
    clearInterval(this.imageRollTimer)
  }

}
