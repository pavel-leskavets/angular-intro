import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YoutubeResponse} from '../models/youtube-response';
import {Statistics} from '../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private clipIds: string[];

  private clipsInfoUrl: string = '/search?key=apiKey&type=video&part=snippet&maxResults=50&q=';
  private statisticsUrl: string = '/videos?key=apiKey&id=';
  private statisticsInfoUrl: string = '&part=snippet,statistics';

  constructor(private http: HttpClient) { }

  public getClipsInfo(searchValue: string): Observable<YoutubeResponse> {
    return this.http.get<YoutubeResponse>(`${this.clipsInfoUrl}${searchValue}`);
  }

  public getClipStatistics(clipsIds: string[]): Observable<Statistics> {
    const ids: string = clipsIds.join(',');
    return this.http.get<Statistics>(`${this.statisticsUrl}${ids}${this.statisticsInfoUrl}`);
  }
}
