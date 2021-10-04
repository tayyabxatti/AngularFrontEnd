import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './components/login/login.component';
import { AuthService } from '../services/auth/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { CustomFormsModule } from 'ng5-validation';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CustomFormsModule,
    RxReactiveFormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService],
  // exports:[TopnavbarComponent]
})
export class AuthModule {}
