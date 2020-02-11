import {Component, OnInit} from '@angular/core';
import {YoutubeApiService} from '../../services/youtube-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

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
            map(stat => ({info, stat}))
          )
        )
      )
      .subscribe(res => console.log(res));
  }

  public showSettings(): void {
    this.isSettings = !this.isSettings;
  }
}
