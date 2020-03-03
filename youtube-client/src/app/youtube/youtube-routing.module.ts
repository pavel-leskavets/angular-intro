import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {FullInfoCardComponent} from './components/full-info-card/full-info-card.component';
import {ClipsResolver} from './resolvers/clip-info.resolver';

const routes: Routes = [
  {path: '', component: MainPageComponent, resolve: {clips: ClipsResolver}},
  {path: ':id', component: FullInfoCardComponent, resolve: {clips: ClipsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ClipsResolver]
})
export class YoutubeRoutingModule {}
