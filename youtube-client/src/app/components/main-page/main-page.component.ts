import { Component, OnInit } from '@angular/core';
import {FullInfo} from '../../models/full-info';
import {Statistics} from '../../models/statistics';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public clipInfo: ClipInfoFromStatistics[];

  constructor() { }

  public ngOnInit(): void {
  }

  public setClipInfo(clipInfo: FullInfo): void {
    this.clipInfo = clipInfo.stats.items;
    console.log(this.clipInfo, 'dfdfdf')
  }
}
