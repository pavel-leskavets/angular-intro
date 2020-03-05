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
import {SharedModule} from '../shared/shared.module';
import {UserComponent} from './components/user/user.component';
import {MatSortModule} from '@angular/material/sort';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

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
    SharedModule,
    MatSortModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
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
    SharedModule
  ],
})
export class YoutubeModule {}
