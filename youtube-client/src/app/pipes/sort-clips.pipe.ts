import { Pipe, PipeTransform } from '@angular/core';
import {ClipInfoFromStatistics} from '../models/clip-info-from-statistics';
import {SortParameters} from '../models/sort-parameters';
import {SortTypesEnum} from '../models/sort-types-enum';
import {SortTypes} from '../enum/sort-types.enum';

@Pipe({
  name: 'sortPipe'
})
export class SortClipsPipe implements PipeTransform {

  private sortTypes: SortTypesEnum = SortTypes;

  public transform(value: ClipInfoFromStatistics[], sortParams: SortParameters): ClipInfoFromStatistics[] {
    if (value) {
      switch (sortParams && sortParams.sortType) {
        case this.sortTypes.ByDate: {
          return value.sort((a, b) => {
            const firstDate: Date = new Date(a.snippet.publishedAt);
            const secondDate: Date = new Date(b.snippet.publishedAt);
            return firstDate < secondDate ? -1 : firstDate > secondDate ? 1 : 0;
          });
        }

        case this.sortTypes.ByViews: {
          return value.sort((a, b) => {
            const firstAmount: number = +a.statistics.viewCount;
            const secondAmount: number = +b.statistics.viewCount;
            return firstAmount < secondAmount ? -1 : firstAmount > secondAmount ? 1 : 0;
          });
        }

        case this.sortTypes.ByTitle: {
          return value.filter(clip => clip.snippet.title
            .toLowerCase()
            .includes(sortParams.filterValue.toLowerCase()));
        }

        default: {
          return value;
        }
      }
    }
  }
}
