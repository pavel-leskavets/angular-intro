import {Pipe, PipeTransform} from '@angular/core';
import {ClipInfoFromStatistics} from '../models/clip-info-from-statistics';
import {SortTypesEnum} from '../models/sort-types-enum';
import {SortTypes} from '../../shared/enum/sort-types.enum';
import {Sort} from '@angular/material/sort';

@Pipe({
  name: 'sortPipe'
})
export class SortClipsPipe implements PipeTransform {

  private sortTypes: SortTypesEnum = SortTypes;

  private compare(a: number | Date , b: number | Date, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public transform(clips: ClipInfoFromStatistics[], sort: Sort): ClipInfoFromStatistics[] {
    if (sort) {
      return clips.sort((a, b) => {
        const isAsc: boolean = sort.direction === this.sortTypes.IsAsc;
        switch (sort.active) {
          case this.sortTypes.ByDate: {
            return this.compare(new Date(a.snippet.publishedAt), new Date(b.snippet.publishedAt), isAsc);
          }
          case this.sortTypes.ByViews: {
            return this.compare(+a.statistics.viewCount, +b.statistics.viewCount, isAsc);
          }
          default: return 0;
        }
      });
    } else {
      return clips;
    }
  }
}
