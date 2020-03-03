import {Component, OnInit} from '@angular/core';
import {YoutubeApiService} from '../../services/youtube-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';
import {ClipInfoService} from '../../services/clip-info.service';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public clipInfo: ClipInfoFromStatistics[];
  public searchForm: FormGroup;
  public isSettings: boolean;
  public isInputDisabled: boolean;

  constructor(private youtubeApiService: YoutubeApiService,
              private clipInfoService: ClipInfoService,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.searchFormInit();
  }

  public searchFormInit(): void {
    this.searchForm = this.formBuilder.group({
      inputValue: null
    });
  }

  public getClipInfo(): void {
    const searchValue: string = this.searchForm.get('inputValue').value;
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

  public showSettings(): void {
    this.isSettings = !this.isSettings;
  }
}
