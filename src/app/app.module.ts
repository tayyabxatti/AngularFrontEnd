
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UtilityModule } from './shared/utility/utility.module';
import { ErrorsModule } from './shared/errors/errors.module';
import { ComponentsModule } from './shared/components/components.module';
import { AuthModule } from './auth/auth.module';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './app-config.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpServiceModule } from './shared/async-services/http/http.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { TableModule } from 'ngx-easy-table';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import {LandingPageModule} from './landing-page/landing-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './feature-modules/admin/admin.module';
import { ParentModule } from './feature-modules/parent/parent.module';
// import { MatchEmailDirective } from './directives/match-email.directive';
// import { PasswordPatternDirective } from './directives/password-pattern.directive';
// import { MatchPasswordDirective } from './directives/match-password.directive';
// import { ValidateUserNameDirective } from './directives/validate-user-name.directive';

export function configServiceFactory(config: ConfigService) {
  
  return () => config.load();
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function tokenGetter() {
  return localStorage.getItem('id_token');
}
@NgModule({
  declarations: [

    AppComponent,

    // ParentComponent,

    // PasswordPatternDirective,
    // MatchPasswordDirective,
    // ValidateUserNameDirective,
    // MatchEmailDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    /** App custom dependencies */
    SelectDropDownModule,
    TableModule,
    NgDatepickerModule,
    // AuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ErrorsModule,

    BrowserAnimationsModule,
    HttpServiceModule.forRoot(),
    UtilityModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    NgbModalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: [
          '/config/env.json',
          '/config/development.json',
          '/config/production.json',
          '/assets/i18n/en.json'
        ]
      }
    }),

    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    LandingPageModule,
    AdminModule,
    ParentModule
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
