import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {ClipInfoFromStatistics} from '../models/clip-info-from-statistics';
import {ClipInfoService} from '../services/clip-info.service';

@Injectable()
export class ClipsResolver implements Resolve<ClipInfoFromStatistics[]> {

  private clipInfo: ClipInfoFromStatistics[];

  constructor(private clipInfoService: ClipInfoService) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ClipInfoFromStatistics[] {
    this.clipInfoService.setClipInfo.subscribe(clips => this.clipInfo = clips);
    return this.clipInfo;
  }
}
