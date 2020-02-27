import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from '../youtube/components/user/user.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {ReactiveFormsModule} from '@angular/forms';
import {ClipCardComponent} from '../youtube/components/clip-card/clip-card.component';
import {ClipContainerComponent} from '../youtube/components/clip-container/clip-container.component';
import {FullInfoCardComponent} from '../youtube/components/full-info-card/full-info-card.component';
import {MainPageComponent} from '../youtube/components/main-page/main-page.component';
import {SearchComponent} from '../youtube/components/search/search.component';
import {SearchSettingsComponent} from '../youtube/components/search-settings/search-settings.component';
import {NotFoundComponent} from '../core/components/not-found/not-found.component';
import {SortClipsPipe} from '../youtube/pipes/sort-clips.pipe';
import {FilterClipsPipe} from '../youtube/pipes/filter-clips.pipe';
import {BorderByDateDirective} from '../youtube/directives/border-by-date.directive';

@NgModule({
            declarations: [
              SortClipsPipe,
              FilterClipsPipe,
              BorderByDateDirective,
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
              FilterClipsPipe
            ]
          })
export class SharedModule {}
