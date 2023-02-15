import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { GalleryViewComponent } from './pages/gallery-view/gallery-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    GalleryViewComponent,
    HeaderComponent,
    FooterComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTypewriterEffectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
