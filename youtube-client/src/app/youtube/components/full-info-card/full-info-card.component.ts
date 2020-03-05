import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';
import {YoutubeApiService} from '../../services/youtube-api.service';

@Component({
   selector: 'app-full-info-card',
   templateUrl: './full-info-card.component.html',
   styleUrls: ['./full-info-card.component.scss']
 })
export class FullInfoCardComponent implements OnInit {

  public currentClip: ClipInfoFromStatistics;

  constructor(private route: ActivatedRoute,
              private youtubeApiService: YoutubeApiService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.youtubeApiService.getClipStatistics([params.id]).subscribe((clip) => {
        [this.currentClip] = clip.items;
      });
    });
  }
}
