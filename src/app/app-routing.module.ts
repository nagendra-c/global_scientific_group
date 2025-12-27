import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { JournalsComponent } from './journals/journals.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
   { path: 'about', component: AboutusComponent },
  { path: 'conferences', component: ConferencesComponent },
  { path: 'journals', component: JournalsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'contact', component: ContactusComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
