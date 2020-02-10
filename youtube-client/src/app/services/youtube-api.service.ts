import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClipInfo} from '../models/clip-info';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private apiKey: string = 'AIzaSyAXdhcX59-cN6sRj_nHOlNvNYllebYdL1U';
  private baseUrl: string = 'https://www.googleapis.com/youtube/v3';
  private clipsInfoUrl: string = `/search?key=${this.apiKey}&type=video&part=snippet&maxResults=15&q=`;
  private clipsStatisticsUrl: string = `/videos?key=${this.apiKey}&id=`;

  constructor(private http: HttpClient) { }

  public getClipsInfo(searchValue: string): Observable<ClipInfo> {
    return this.http.get<ClipInfo>(`${this.baseUrl}${this.clipsInfoUrl}${searchValue}`);
  }

  public getClipStatistics(clipsIds: string[]) {
    const clipsIdsString: string = clipsIds.join(',');
    return this.http.get(`${this.baseUrl}${this.clipsInfoUrl}${clipsIdsString}`);
  }
}
