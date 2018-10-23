import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EpgHeadComponent } from './epg-head/epg-head.component';
import { EpgTimescaleComponent } from './epg-timescale/epg-timescale.component';
import { EpgPlaybillsComponent } from './epg-playbills/epg-playbills.component';
import { EpgDetailsComponent } from './epg-details/epg-details.component';
import { QueryService } from './services/query.service';
import { EpgCurrentTimeComponent } from './epg-current-time/epg-current-time.component';

@NgModule({
  declarations: [
    AppComponent,
    EpgHeadComponent,
    EpgTimescaleComponent,
    EpgPlaybillsComponent,
    EpgDetailsComponent,
    EpgCurrentTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
