import {Component, OnInit} from '@angular/core';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {ClipInfoService} from '../../services/clip-info.service';
import {Sort} from '@angular/material/sort';
import {debounceTime} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clip-container',
  templateUrl: './clip-container.component.html',
  styleUrls: ['./clip-container.component.scss']
})
export class ClipContainerComponent implements OnInit {

  private delayBeforeFilter: number = 800;

  public clipInfo: ClipInfoFromStatistics[];
  public sortParams: Sort;
  public filterValue: string;

  constructor(private clipInfoService: ClipInfoService,
              private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.clipInfoService.setClipInfo.subscribe(clips => this.clipInfo = clips);
    this.clipInfoService.sortKind.subscribe(sortParams => this.sortParams = sortParams);
    this.clipInfoService.filterValue.pipe(debounceTime(this.delayBeforeFilter))
      .subscribe(filterValue => this.filterValue = filterValue);
    this.setClipsFromRoute();
  }

  public setClipsFromRoute(): void {
    if (!this.clipInfo) {
      this.clipInfo = this.route.snapshot.data.clips;
    }
  }
}
