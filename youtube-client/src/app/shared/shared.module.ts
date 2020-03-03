import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {ReactiveFormsModule} from '@angular/forms';
import {SortClipsPipe} from '../youtube/pipes/sort-clips.pipe';
import {FilterClipsPipe} from '../youtube/pipes/filter-clips.pipe';
import {BorderByDateDirective} from '../youtube/directives/border-by-date.directive';
import {CutOffPipe} from '../youtube/pipes/cut-off.pipe';

@NgModule({
  declarations: [
    SortClipsPipe,
    FilterClipsPipe,
    BorderByDateDirective,
    CutOffPipe
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSortModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    BorderByDateDirective,
    SortClipsPipe,
    FilterClipsPipe,
    CutOffPipe
  ]
  })
export class SharedModule {}
