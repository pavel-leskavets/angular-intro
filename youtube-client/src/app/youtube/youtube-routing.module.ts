import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {FullInfoCardComponent} from './components/full-info-card/full-info-card.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: ':id', component: FullInfoCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule {}
