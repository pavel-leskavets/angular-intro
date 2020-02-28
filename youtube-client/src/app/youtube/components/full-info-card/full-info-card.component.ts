import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClipInfoService} from '../../services/clip-info.service';
import {ClipInfoFromStatistics} from '../../models/clip-info-from-statistics';

@Component({
  selector: 'app-full-info-card',
  templateUrl: './full-info-card.component.html',
  styleUrls: ['./full-info-card.component.scss']
})
export class FullInfoCardComponent implements OnInit {

  private clipId: string;
  private clipInfo: ClipInfoFromStatistics;

  constructor(private route: ActivatedRoute,
              private clipInfoService: ClipInfoService) { }

  public ngOnInit(): void {
   this.route.params.subscribe(params => {
     console.log(params)
     // this.clipId = params.id;
     // this.getClipInfo();
   });
  }

  public getClipInfo(): void {
    this.clipInfoService.setClipInfo.subscribe(clips => {
      this.clipInfo = clips.find(clip => clip.id === this.clipId);
      console.log(this.clipInfo);
    });
  }

}
