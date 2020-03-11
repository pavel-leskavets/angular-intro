import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YoutubeResponse} from '../models/youtube-response';
import {Statistics} from '../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private clipsInfoUrl: string = '/search?&type=video&part=snippet&maxResults=24&q=';
  private statisticsUrl: string = '/videos';

  constructor(private http: HttpClient) { }

  public getClipsInfo(searchValue: string): Observable<YoutubeResponse> {
    return this.http.get<YoutubeResponse>(`${this.clipsInfoUrl}${searchValue}`);
  }

  public getClipStatistics(clipsIds: string[]): Observable<Statistics> {
    const params: HttpParams = new HttpParams()
      .set('id', clipsIds.join(','))
      .set('part', 'snippet,statistics');
    return this.http.get<Statistics>(this.statisticsUrl, {params});
  }
}
