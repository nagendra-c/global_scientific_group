import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
   slides = [
    {
      badge: 'Lead Purpose, Innovate with Passion',
      titleMain: 'Yearly Business',
      highlight: 'Conference ',
      thin: '"26"',
      image: '../assets/images/banner-bg.svg'
    },
    {
      badge: 'Lead Purpose, Innovate with Passion',
      titleMain: 'Digital World',
      highlight: 'Conference',
      thin: 'Meetup',
      image: '../assets/images/banner1.svg'
    },
    {
      badge: 'Lead Purpose, Innovate with Passion',
      titleMain: 'Digital Marketing',
      highlight: 'Conference',
      thin: '"26"',
      image: '../assets/images/banner2.svg'
    }
  ];

  activeIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }

  setSlide(index: number): void {
    this.activeIndex = index;
  }
}
