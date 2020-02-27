import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YoutubeRoutingModule} from './youtube-routing.module';
import {ClipCardComponent} from './components/clip-card/clip-card.component';
import {ClipContainerComponent} from './components/clip-container/clip-container.component';
import {FullInfoCardComponent} from './components/full-info-card/full-info-card.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {SearchComponent} from './components/search/search.component';
import {SearchSettingsComponent} from './components/search-settings/search-settings.component';
import {NotFoundComponent} from '../core/components/not-found/not-found.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './components/user/user.component';

@NgModule({
  declarations: [
    ClipCardComponent,
    ClipContainerComponent,
    FullInfoCardComponent,
    MainPageComponent,
    SearchComponent,
    SearchSettingsComponent,
    UserComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSortModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    ClipCardComponent,
    ClipContainerComponent,
    FullInfoCardComponent,
    MainPageComponent,
    SearchComponent,
    SearchSettingsComponent,
    UserComponent,
    NotFoundComponent,
  ],
})
export class YoutubeModule {}
