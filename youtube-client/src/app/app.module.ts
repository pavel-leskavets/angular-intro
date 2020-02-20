import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { ClipCardComponent } from './components/clip-card/clip-card.component';
import { FullInfoCardComponent } from './components/full-info-card/full-info-card.component';
import { ClipContainerComponent } from './components/clip-container/clip-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BorderByDateDirective } from './directives/border-by-date.directive';
import { SortClipsPipe } from './pipes/sort-clips.pipe';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    SearchSettingsComponent,
    ClipCardComponent,
    FullInfoCardComponent,
    ClipContainerComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    NotFoundComponent,
    MainPageComponent,
    BorderByDateDirective,
    SortClipsPipe,
],
            imports: [
              BrowserModule,
              AppRoutingModule,
              FormsModule,
              BrowserAnimationsModule,
              HttpClientModule,
              ReactiveFormsModule,
              MatSliderModule,
              MatCheckboxModule,
              MatSortModule,
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
