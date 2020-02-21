import {Component, OnInit} from '@angular/core';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {ClipInfoService} from '../../services/clip-info.service';
import {SortParameters} from '../../models/sort-parameters';

@Component({
  selector: 'app-clip-container',
  templateUrl: './clip-container.component.html',
  styleUrls: ['./clip-container.component.scss']
})
export class ClipContainerComponent implements OnInit {

  public clipInfo: ClipInfoFromStatistics[];
  public sortParams: SortParameters;

  constructor(private clipInfoService: ClipInfoService) { }

  public ngOnInit(): void {
    this.clipInfoService.setClipInfo.subscribe(clips => this.clipInfo = clips);
    this.clipInfoService.sortKind.subscribe(sortParams => this.sortParams = sortParams);
  }

}
