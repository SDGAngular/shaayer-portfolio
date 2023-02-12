import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryViewComponent } from './pages/gallery-view/gallery-view.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'gallery',component:GalleryViewComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
