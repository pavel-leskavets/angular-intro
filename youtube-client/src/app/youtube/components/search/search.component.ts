import {Component, OnInit} from '@angular/core';
import {YoutubeApiService} from '../../services/youtube-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {ClipInfoService} from '../../services/clip-info.service';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private minRequestLength: number = 3;

  public clipInfo: ClipInfoFromStatistics[];
  public searchForm: FormGroup;
  public isSettings: boolean;

  constructor(private youtubeApiService: YoutubeApiService,
              private clipInfoService: ClipInfoService,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.searchFormInit();
    this.searchForm.get('inputValue')
      .valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.getClipInfo());
  }

  public searchFormInit(): void {
    this.searchForm = this.formBuilder.group({
      inputValue: null
    });
  }

  public getClipInfo(): void {
    const searchValue: string = this.searchForm.get('inputValue').value;
    if (searchValue.length >= this.minRequestLength) {
    this.youtubeApiService.getClipsInfo(searchValue)
      .pipe(
        switchMap(info => this.youtubeApiService.getClipStatistics(info.items.map(id => id.id.videoId))
          .pipe(
            map(stats => ({info, stats}))
          )
        )
      )
      .subscribe(res  => {
        this.clipInfo = res.stats.items;
        this.clipInfoService.setClipInfo.next(this.clipInfo);
      });
    }
  }

  public showSettings(): void {
    this.isSettings = !this.isSettings;
  }
}
