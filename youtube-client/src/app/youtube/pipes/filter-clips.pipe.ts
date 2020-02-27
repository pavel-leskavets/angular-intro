import { Pipe, PipeTransform } from '@angular/core';
import {ClipInfoFromStatistics} from '../models/clip-info-from-statistics';

@Pipe({
  name: 'filterClips'
})
export class FilterClipsPipe implements PipeTransform {

  public transform(clips: ClipInfoFromStatistics[], filterValue: string): ClipInfoFromStatistics[] {
    return clips && filterValue
      ? clips.filter(clip => clip.snippet.title.toLowerCase().includes(filterValue.toLowerCase()))
      : clips;
  }

}
