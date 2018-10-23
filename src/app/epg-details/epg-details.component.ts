import { Component, Input, OnInit } from '@angular/core';
import { PlaybillDetail } from '../services/query.service';

@Component({
  selector: 'app-epg-details',
  templateUrl: './epg-details.component.html',
  styleUrls: ['./epg-details.component.scss']
})
export class EpgDetailsComponent implements OnInit {

  @Input() protected detail: PlaybillDetail;

  constructor() { }

  ngOnInit() {
  }

}
