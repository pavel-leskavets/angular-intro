import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {YoutubeApiService} from '../../services/youtube-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';
import {FullInfo} from '../../models/full-info';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() public clipData: EventEmitter<FullInfo> = new EventEmitter();
  public searchForm: FormGroup;
  public isSettings: boolean;

  constructor(private youtubeApiService: YoutubeApiService,
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
        this.clipData.emit(res);
      });
  }

  public showSettings(): void {
    this.isSettings = !this.isSettings;
  }
}
