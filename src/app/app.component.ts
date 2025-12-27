import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gsg';
  scrolled = false;
  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
