import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-epg-current-time',
  templateUrl: './epg-current-time.component.html',
  styleUrls: ['./epg-current-time.component.scss']
})
export class EpgCurrentTimeComponent implements OnInit {

  @Input() protected isShown: boolean;

  protected currentTime: string;

  constructor() { }

  ngOnInit() {
    const now = new Date();
    this.currentTime = `${now.getHours()}:${now.getMinutes()}`;
  }

  getLinePosition() {
    return {
      left: `${new Date().getSeconds() * 10 + 500}px`
    };
  }
}
