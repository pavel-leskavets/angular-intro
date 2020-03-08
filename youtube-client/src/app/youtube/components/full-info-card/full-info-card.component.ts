import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {YoutubeApiService} from '../../services/youtube-api.service';
import {switchMap} from 'rxjs/operators';

@Component({
   selector: 'app-full-info-card',
   templateUrl: './full-info-card.component.html',
   styleUrls: ['./full-info-card.component.scss']
 })
export class FullInfoCardComponent implements OnInit {

  public currentClip: ClipInfoFromStatistics = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private youtubeApiService: YoutubeApiService
  ) {
  }

  public ngOnInit(): void {
    this.route.params.pipe(switchMap(params => this.youtubeApiService
      .getClipStatistics([params.id])))
      .subscribe(clip => {
        [this.currentClip] = clip.items;
        this.redirectToMain();
      });
  }

  public redirectToMain(): void {
    if (!this.currentClip) {
      this.router.navigateByUrl('/main-page');
    }
  }
}
