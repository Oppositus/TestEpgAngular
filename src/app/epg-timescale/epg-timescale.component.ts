import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-epg-timescale',
  templateUrl: './epg-timescale.component.html',
  styleUrls: ['./epg-timescale.component.scss']
})
export class EpgTimescaleComponent implements OnInit {

  protected isCerrentTimeVisible = true;

  constructor() { }

  ngOnInit() {
  }

}
