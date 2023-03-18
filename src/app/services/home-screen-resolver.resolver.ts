import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeScreenResolverResolver implements Resolve<any> {
  constructor(private httpClient: HttpClient){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.httpClient.get('../../assets/stubs/home-screen.json').pipe(

      map((data:any)=>{
        const mobile = sessionStorage.getItem('isMobile')
        const isMobile = mobile?JSON.parse(mobile):null;
        let landingImages:any;
        if(isMobile){
      
          landingImages = data.landing.horizontalImages;
        }
        else{
           landingImages =  data.landing.verticalImages;
        }
        landingImages.forEach((eachImage:string)=>{
            this.loadImages(eachImage);
        })
        return data;
      })
    );
  }

  loadImages(horizontalImages:string):void{

    let newImage = document.createElement('img');
    newImage.src = horizontalImages;
  }
}
