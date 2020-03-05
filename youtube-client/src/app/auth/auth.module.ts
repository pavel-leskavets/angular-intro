import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    AuthPageComponent
  ],
            imports: [
              CommonModule,
              AuthRoutingModule,
              ReactiveFormsModule,
              MatFormFieldModule,
              MatInputModule,
            ]
          })
export class AuthModule { }
