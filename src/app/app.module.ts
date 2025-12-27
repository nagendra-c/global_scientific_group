import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { JournalsComponent } from './journals/journals.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SliderComponent } from './slider/slider.component';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ConferencesComponent,
    JournalsComponent,
    BlogsComponent,
    ContactusComponent,
    SliderComponent,
    CountDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
