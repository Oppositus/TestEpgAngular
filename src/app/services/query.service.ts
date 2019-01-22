import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ResultResponse {
  retCode: string;
  retMsg: string;
}

export interface LoginResponse {
  result: ResultResponse;
}

export interface AuthResponse {
  result: ResultResponse;
  csrfToken: string;
}

export interface HeartbeatResponse {
  result: ResultResponse;
  userFilter: string;
  nextCallInterval: string;
}

export interface ChannelLogo {
  display: string;
  location: string;
  size: string;
  url: string;
}

export interface ChannelDetail {
  ID: string;
  name?: string;
  logo?: ChannelLogo;
}

export interface ChannelsResponse {
  result: ResultResponse;
  total: string;
  channelDetails: Array<ChannelDetail>;
}

export interface PlaybillLite {
  ID: string;
  channelID: string;
  startTime: string;
  endTime: string;
  name: string;
}

export interface ChannelPlaybill {
  playbillCount: string;
  playbillLites: Array<PlaybillLite>;
}

export interface EpgResponse {
  result: ResultResponse;
  total: string;
  channelPlaybills: Array<ChannelPlaybill>;
}

export interface Picture {
  posters?: Array<string>;
}

export interface Rating {
  ID: string;
  name: string;
}

export interface PlaybillDetail {
  ID: string;
  startTime: string;
  endTime: string;
  name: string;
  introduce: string;
  picture: Picture;
  channelDetail: ChannelDetail;
  rating: Rating;
}

export interface DetailsResponse {
  result: ResultResponse;
  playbillDetail: PlaybillDetail;
}

@Injectable()
export class QueryService {
  private csrfToken: string;
  private userFilter: string = null;

  constructor(private http: HttpClient) {

  }

  // ---------------------------------------------------------
  // API
  public async authenticate(): Promise<string | void> {
    return new Promise<void>((resolve, reject) => {
      this.login().subscribe(() => {

        this.auth().subscribe((authResult: AuthResponse) => {

          this.csrfToken = authResult.csrfToken || null;
          this.heartbeat().subscribe((heartbeatResult: HeartbeatResponse) => {

            this.updateUserFilter(heartbeatResult);
            resolve();

          }, reject.bind(null, 'Error in heartbeat'));

        }, reject.bind(null, 'Error in auth'));

      }, reject.bind(null, 'Error in login'));
    });
  }

  /**
   * Get channels list
   */
  public queryChannels(): Observable<ChannelsResponse> {
    return this.http.post<ChannelsResponse>(
      'http://212.30.186.97:33200/VSP/V3/QueryAllChannel',
      {
        isReturnAllMedia: '1'
      },
      {
        headers: this.csrf,
        params: new HttpParams().set('userFilter', this.userFilter)
      }
    );
  }

  /**
   * Get EPG for channels
   *
   * @param channels Array of channel IDs. Get IDs from channels request. Example: ['123', '2222', '3309', '12123', '555]
   * @param timeFrom Time in ms of start interval. Example: Date.now()
   * @param timeTo Time in ms of end interval. Example: Date.now() + 86400000
   */
  public queryEpg(channels: Array<string>, timeFrom: number, timeTo: string): Observable<EpgResponse> {
    return this.http.post<any>(
      'http://212.30.186.97:33200/VSP/V3/QueryPlaybillList?scene=EpgTVguide&SID=queryplaybilllist6',
      {
        queryChannel: {
          channelIDs: channels
        },
        queryPlaybill: {
          type: '0',
          startTime: timeFrom.toString(),
          endTime: timeTo.toString(),
          count: '100',
          offset: '0',
          isFillProgram: '1'
        },
        needChannel: '0'
      },
      {
        headers: this.csrf
      }
    );
  }

  /**
   * Query detailed EPG description
   *
   * @param playbillID ID of the program
   */
  public queryDetails(playbillID: string): Observable<DetailsResponse> {
    return this.http.post<DetailsResponse>(
      'http://212.30.186.97:33200/VSP/V3/GetPlaybillDetail?SID=getplaybilldetail1',
      {
        playbillID
      },
      {
        headers: this.csrf
      }
    );
  }

  // ---------------------------------------------------------
  // Private methods
  private get csrf(): HttpHeaders {
    const headers = {};
    if (this.csrfToken) {
      headers['X_CSRFToken'] = this.csrfToken;
    }
    return new HttpHeaders(headers);
  }

  private updateUserFilter(response: HeartbeatResponse): void {
    this.userFilter = response.userFilter;

    setTimeout(
      () => this.heartbeat().subscribe(this.updateUserFilter.bind(this)),
      parseInt(response.nextCallInterval, 10) * 1000
    );
  }

  private login(): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      'http://212.30.186.97:33200/VSP/V3/Login',
      {
        subscriberID: 'smartit_1',
        deviceModel: 'SmartTV'
      }
    );
  }

  private auth(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      'http://212.30.186.97:33200/VSP/V3/Authenticate',
      {
        authenticateBasic: {
          userType: '3',
          isSupportWebpImgFormat: '1',
          needPosterTypes: ['1', '2', '3', '4', '5', '6', '7'],
          timeZone: 'Europe/Moscow',
          lang: 'ru',
          authType: '0',
          pageTrackerUIType: 'HW_STB_EPGUI'
        },
        authenticateDevice: {
          physicalDeviceID: '9c8d222f-9da5-4641-a977-cc9bbc8225ae|641f869cfe1611bf9cd1b5d9abb',
          deviceModel: 'SmartTV'
        },
        authenticateTolerant: {
          areaCode: '1',
          templateName: 'default',
          subnetID: '701',
          bossID: 'demozone',
          userGroup: '-1'
        }
      }
    );
  }

  private heartbeat(): Observable<HeartbeatResponse> {
    return this.http.post<HeartbeatResponse>(
      'http://212.30.186.97:33200/VSP/V3/OnLineHeartbeat',
      {},
      {
        headers: this.csrf
      }
    );
  }
}
