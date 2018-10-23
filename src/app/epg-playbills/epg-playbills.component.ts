import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChannelDetail, PlaybillLite } from '../services/query.service';

@Component({
  selector: 'app-epg-playbills',
  templateUrl: './epg-playbills.component.html',
  styleUrls: ['./epg-playbills.component.scss']
})
export class EpgPlaybillsComponent implements OnInit {

  @Input() channels: Array<ChannelDetail> = [];
  @Output() epgSelected = new EventEmitter<PlaybillLite>();

  protected channelsCount: number;

  constructor() { }

  ngOnInit() {
  }

  whenEpgIsSelected(value) {
    this.epgSelected.emit(value);
  }
}
