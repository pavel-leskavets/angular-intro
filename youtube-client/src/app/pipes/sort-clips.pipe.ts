import { Pipe, PipeTransform } from '@angular/core';
import {ClipInfoFromStatistics} from '../models/clip-info-from-statistics';
import {SortParameters} from '../models/sort-parameters';

@Pipe({
  name: 'sortPipe'
})
export class SortClipsPipe implements PipeTransform {

  private sortByDate: string = 'byDate';
  private sortByViews: string = 'byViews';
  private filterByTitle: string = 'byTitle';

  public transform(value: ClipInfoFromStatistics[], sortKind: SortParameters): ClipInfoFromStatistics[] {
    if (value) {
      switch (sortKind && sortKind.sortParameter) {
        case this.sortByDate: {
          return value.sort((a, b) => {
            const firstDate: Date = new Date(a.snippet.publishedAt);
            const secondDate: Date = new Date(b.snippet.publishedAt);
            return firstDate < secondDate ? -1 : firstDate > secondDate ? 1 : 0;
          });
        }

        case this.sortByViews: {
          return value.sort((a, b) => {
            const firstAmount: number = +a.statistics.viewCount;
            const secondAmount: number = +b.statistics.viewCount;
            return firstAmount < secondAmount ? -1 : firstAmount > secondAmount ? 1 : 0;
          });
        }

        case this.filterByTitle: {
          return value.filter(clip => clip.snippet.title
            .toLowerCase()
            .includes(sortKind.filterValue.toLowerCase()));
        }

        default: {
          return value;
        }
      }
    }
  }
}
