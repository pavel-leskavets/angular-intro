import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {ClipInfoService} from '../../services/clip-info.service';
import {Sort} from '@angular/material/sort';
import {debounceTime} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-clip-container',
  templateUrl: './clip-container.component.html',
  styleUrls: ['./clip-container.component.scss']
})
export class ClipContainerComponent implements OnInit,OnDestroy {

  private delayBeforeFilter: number = 800;
  private subscriptions: Subscription[] = [];

  public clipInfo: ClipInfoFromStatistics[];
  public sortParams: Sort;
  public filterValue: string;
  public isSpinner: boolean;
  public color: ThemePalette = 'accent';
  public mode: ProgressSpinnerMode = 'indeterminate';
  public value: number = 50;

  constructor(private clipInfoService: ClipInfoService,
              private route: ActivatedRoute) { }

  public ngOnInit(): void {
    const subscription1$: Subscription = this.clipInfoService.setClipInfo.subscribe(clips => this.clipInfo = clips);
    const subscription2$: Subscription = this.clipInfoService.isSpinner.subscribe(isSpinner => this.isSpinner = isSpinner);
    const subscription3$: Subscription = this.clipInfoService.sortKind.subscribe(sortParams => this.sortParams = sortParams);
    const subscription4$: Subscription = this.clipInfoService.filterValue.pipe(debounceTime(this.delayBeforeFilter))
      .subscribe(filterValue => this.filterValue = filterValue);
    this.setClipsFromRoute();
    this.subscriptions.push(subscription1$, subscription2$, subscription3$, subscription4$);
  }

  public setClipsFromRoute(): void {
    if (!this.clipInfo) {
      this.clipInfo = this.route.snapshot.data.clips;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe())
  }
}
