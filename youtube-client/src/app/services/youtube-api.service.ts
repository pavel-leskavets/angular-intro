import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClipInfo} from '../models/clip-info';
import {YoutubeResponse} from '../models/youtube-response';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private apiKey: string = 'AIzaSyAXdhcX59-cN6sRj_nHOlNvNYllebYdL1U';
  private baseUrl: string = 'https://www.googleapis.com/youtube/v3';
  private clipsInfoUrl: string = `/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=`;
  private statisticsUrl: string = `/videos?key=${this.apiKey}&id=`;
  private statisticsInfoUrl: string = '&part=snippet,statistics';

  constructor(private http: HttpClient) { }

  public getClipsInfo(searchValue: string): Observable<YoutubeResponse> {
    return this.http.get<YoutubeResponse>(`${this.baseUrl}${this.clipsInfoUrl}${searchValue}`);
  }

  public getClipStatistics(clipsIds: string[]): Observable<ClipInfo> {
    const ids: string = clipsIds.join(',');
    return this.http.get<ClipInfo>(`${this.baseUrl}${this.statisticsUrl}${ids}${this.statisticsInfoUrl}`);
  }
}
