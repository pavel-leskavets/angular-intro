import {Component, Input, OnInit} from '@angular/core';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';

@Component({
  selector: 'app-clip-container',
  templateUrl: './clip-container.component.html',
  styleUrls: ['./clip-container.component.scss']
})
export class ClipContainerComponent implements OnInit {

  @Input() public clipInfo: ClipInfoFromStatistics[];

  constructor() { }

  public ngOnInit(): void {
  }

}
