import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';

@Component({
  selector: 'app-full-info-card',
  templateUrl: './full-info-card.component.html',
  styleUrls: ['./full-info-card.component.scss']
})
export class FullInfoCardComponent implements OnInit {

  public currentClip: ClipInfoFromStatistics;

  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
        const clips: ClipInfoFromStatistics[] = this.route.snapshot.data.clips;
        if (clips) {
          this.currentClip = clips.find(clip => clip.id === params.id);
        }
      });
    this.redirectToMainPage();
  }

  public redirectToMainPage(): void {
    if (!this.currentClip) {
      this.router.navigateByUrl('/main-page');
    }
  }
}
