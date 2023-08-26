import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioPageComponent } from './bio-page/bio-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: "bio", component: BioPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: "**", redirectTo: '/'} // Redirect undefined paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
