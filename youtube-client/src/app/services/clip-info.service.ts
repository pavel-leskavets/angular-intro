import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ClipInfoFromStatistics} from '../models/clip-info-from-statistics';
import {SortParameters} from '../models/sort-parameters';
import {Sort} from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class ClipInfoService {

  public setClipInfo: Subject<ClipInfoFromStatistics[]> = new Subject<ClipInfoFromStatistics[]>();
  public sortKind: Subject<Sort> = new Subject<Sort>();

  constructor() { }
}
