import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {YoutubeApiService} from '../../services/youtube-api.service';
import {switchMap} from 'rxjs/operators';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment.prod';

@Component({
   selector: 'app-full-info-card',
   templateUrl: './full-info-card.component.html',
   styleUrls: ['./full-info-card.component.scss']
 })
export class FullInfoCardComponent implements OnInit {

  public currentClip: ClipInfoFromStatistics = null;
  public src: SafeResourceUrl;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer,
              private youtubeApiService: YoutubeApiService
  ) {
  }

  public ngOnInit(): void {
    this.route.params.pipe(switchMap(params => this.youtubeApiService
      .getClipStatistics([params.id])))
      .subscribe(clip => {
        [this.currentClip] = clip.items;
        this.src = this.sanitizer
          .bypassSecurityTrustResourceUrl(`${environment.videoUrl}${this.currentClip.id}`);
        this.redirectToMain();
      });
  }

  public redirectToMain(): void {
    if (!this.currentClip) {
      this.router.navigateByUrl('/main-page');
    }
  }
}
