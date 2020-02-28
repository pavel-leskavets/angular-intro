import {Component, Input, OnInit} from '@angular/core';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clip-card',
  templateUrl: './clip-card.component.html',
  styleUrls: ['./clip-card.component.scss']
})
export class ClipCardComponent implements OnInit {

  @Input() public clip: ClipInfoFromStatistics;

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public getMoreInfo(id: string): void {
    this.router.navigate(['/main-page', this.clip]);
  }
}
