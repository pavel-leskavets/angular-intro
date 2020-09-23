import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {ClipInfoFromStatistics} from '../models/clip-info-from-statistics';
import {Sort} from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class ClipInfoService {

  public setClipInfo: Subject<ClipInfoFromStatistics[]> = new Subject<ClipInfoFromStatistics[]>();
  public sortKind: Subject<Sort> = new Subject<Sort>();
  public filterValue: Subject<string> = new Subject<string>();
  public isSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
