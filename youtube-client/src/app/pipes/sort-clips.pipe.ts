import { Pipe, PipeTransform } from '@angular/core';
import {ClipInfoFromStatistics} from '../models/clip-info-from-statistics';
import {SortParameters} from '../models/sort-parameters';
import {SortTypesEnum} from '../models/sort-types-enum';
import {SortTypes} from '../enum/sort-types.enum';
import {Sort} from '@angular/material/sort';

@Pipe({
  name: 'sortPipe'
})
export class SortClipsPipe implements PipeTransform {

  private sortTypes: SortTypesEnum = SortTypes
  private clipInfo: ClipInfoFromStatistics[];

  private compare(a: number | Date , b: number | Date, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public transform(value: ClipInfoFromStatistics[], sort: Sort): ClipInfoFromStatistics[] {
    if (value && sort) {
      if (!sort.active || sort.direction === '') {
        const clips: ClipInfoFromStatistics[] = [...value];
        this.clipInfo = clips;
        return this.clipInfo;
      }



      return value.sort((a, b) => {
        const isAsc: boolean = sort.direction === 'asc';

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
      return value
    }








    // if (value) {
    //   switch (sortParams && sortParams.sortType) {
    //     case this.sortTypes.ByDate: {
    //       return value.sort((a, b) => {
    //         const firstDate: Date = new Date(a.snippet.publishedAt);
    //         const secondDate: Date = new Date(b.snippet.publishedAt);
    //         return firstDate < secondDate ? -1 : firstDate > secondDate ? 1 : 0;
    //       });
    //     }
    //
    //     case this.sortTypes.ByViews: {
    //       return value.sort((a, b) => {
    //         const firstAmount: number = +a.statistics.viewCount;
    //         const secondAmount: number = +b.statistics.viewCount;
    //         return firstAmount < secondAmount ? -1 : firstAmount > secondAmount ? 1 : 0;
    //       });
    //     }
    //
    //     case this.sortTypes.ByTitle: {
    //       return value.filter(clip => clip.snippet.title
    //         .toLowerCase()
    //         .includes(sortParams.filterValue.toLowerCase()));
    //     }
    //
    //     default: {
    //       return value;
    //     }
    //   }
    // }
  }
}
