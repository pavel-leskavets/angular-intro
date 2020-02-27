import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {AuthGuard} from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'main-page',
    canActivate: [AuthGuard],
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
