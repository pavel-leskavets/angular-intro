import {Component, OnDestroy, OnInit} from '@angular/core';
import {YoutubeApiService} from '../../services/youtube-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {ClipInfoService} from '../../services/clip-info.service';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {AuthService} from '../../../auth/services/auth.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  private minRequestLength: number = 3;

  public clipInfo: ClipInfoFromStatistics[];
  public searchForm: FormGroup;
  public isSettings: boolean;
  public isLoggedIn: boolean;

  constructor(private youtubeApiService: YoutubeApiService,
              private clipInfoService: ClipInfoService,
              private authService: AuthService,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.searchFormInit();
    this.disableInput();
    const subscription$: Subscription = this.searchForm.get('inputValue')
      .valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.getClipInfo());
    this.subscriptions.push(subscription$);
  }

  public searchFormInit(): void {
    this.searchForm = this.formBuilder.group({
      inputValue: null
    });
  }

  public getClipInfo(): void {
    const searchValue: string = this.searchForm.get('inputValue').value;
    if (searchValue && searchValue.length >= this.minRequestLength) {
      this.clipInfoService.isSpinner.next(true);
      const subscription$: Subscription = this.youtubeApiService.getClipsInfo(searchValue)
        .pipe(
          switchMap(info => this.youtubeApiService.getClipStatistics(info.items.map(id => id.id.videoId))
            .pipe(
              map(stats => ({info, stats}))
            )
          )
        )
        .subscribe(res => {
          this.clipInfo = res.stats.items;
          this.clipInfoService.setClipInfo.next(this.clipInfo);
          this.clipInfoService.isSpinner.next(false);
        });
      this.subscriptions.push(subscription$)
    }
  }

  public disableInput(): void {
    const subscription$: Subscription = this.authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (!isLoggedIn) {
        this.searchForm.get('inputValue').disable();
      } else {
        this.searchForm.get('inputValue').enable();
      }
    });
    this.subscriptions.push(subscription$)
  }

  public showSettings(): void {
    this.isSettings = !this.isSettings;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe())
  }

}
