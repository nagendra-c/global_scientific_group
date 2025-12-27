import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.scss'
})
export class CountDownComponent implements OnInit, OnDestroy{
  @Input() targetDate!: string; // e.g. '2026-01-30T18:00:00'

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private timer: any;

  ngOnInit(): void {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private updateCountdown(): void {
    const target = new Date(this.targetDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      clearInterval(this.timer);
      return;
    }

    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((diff / (1000 * 60)) % 60);
    this.seconds = Math.floor((diff / 1000) % 60);
  }

}
