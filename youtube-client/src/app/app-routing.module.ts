import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {FullInfoCardComponent} from './components/full-info-card/full-info-card.component';
import {MainPageComponent} from './components/main-page/main-page.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'registration', component: RegistrationFormComponent},
    {path: 'full-info', component: FullInfoCardComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
              imports: [RouterModule.forRoot(routes)],
              exports: [RouterModule]
          })
export class AppRoutingModule {
}
