import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryViewComponent } from './pages/gallery-view/gallery-view.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeScreenResolverResolver } from './services/home-screen-resolver.resolver';

const routes: Routes = [

  {path:'home',component:HomeComponent,resolve:{
    homeDeatils: HomeScreenResolverResolver
  }},
  {path:'gallery',component:GalleryViewComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
