import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {YoutubeModule} from '../youtube/youtube.module';
import {SharedModule} from '../shared/shared.module';
import { SystemComponent } from './pages/system/system.component';

@NgModule({
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    YoutubeModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers: [],
  exports: [
    YoutubeModule,
    SharedModule,
  ]
})
export class CoreModule {}
