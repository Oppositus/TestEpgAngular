import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-epg-current-time',
  templateUrl: './epg-current-time.component.html',
  styleUrls: ['./epg-current-time.component.scss']
})
export class EpgCurrentTimeComponent implements OnInit, OnDestroy {

  @Input() protected isShown: boolean;
  protected currentTime: string;

  private interval: number;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      const now = new Date();
      this.currentTime = `${now.getHours()}:${now.getMinutes()}`;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getLinePosition() {
    return {
      left: `${new Date().getSeconds() * 10 + 200}px`
    };
  }
}
