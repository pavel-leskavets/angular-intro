import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {path: '', component: AuthPageComponent, children: [
      {path: 'login', component: LoginFormComponent},
      {path: 'registration', component: RegistrationFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
