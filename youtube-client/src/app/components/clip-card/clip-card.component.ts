import {Component, Input, OnInit} from '@angular/core';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';

@Component({
  selector: 'app-clip-card',
  templateUrl: './clip-card.component.html',
  styleUrls: ['./clip-card.component.scss']
})
export class ClipCardComponent implements OnInit {

  @Input() public clip: ClipInfoFromStatistics;

  constructor() { }

  public ngOnInit(): void {
  }

}
