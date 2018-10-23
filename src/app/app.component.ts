import { Component, OnInit } from '@angular/core';
import { ChannelDetail, ChannelsResponse, DetailsResponse, PlaybillDetail, PlaybillLite, QueryService } from './services/query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  protected currentDetail: PlaybillDetail = null;
  protected channels: Array<ChannelDetail> = [];

  constructor(private queryService: QueryService) {

  }

  async ngOnInit() {
    try {
      await this.queryService.authenticate();
      this.queryService.queryChannels().subscribe((result: ChannelsResponse) => {
        this.channels = result.channelDetails;
      });
    } catch (loginError) {
      // login error
      console.log(loginError);
    }
  }

  onEpgSelected($event: PlaybillLite) {
    this.queryService.queryDetails($event.ID).subscribe((details: DetailsResponse) => {
      this.currentDetail = details.playbillDetail;
    });
  }
}
