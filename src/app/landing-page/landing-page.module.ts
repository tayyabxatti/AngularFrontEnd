import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { FormsModule } from '@angular/forms';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './footer/footer.component';
import { PasswordPatternDirective } from '../directives/password-pattern.directive';
import { MatchPasswordDirective } from '../directives/match-password.directive';
import { ValidateUserNameDirective } from '../directives/validate-user-name.directive';
import { MatchEmailDirective } from '../directives/match-email.directive';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from '../services/auth/auth.service';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { SentEmailComponent } from './components/sent-email/sent-email.component';
import { TeacherCompleteProfileComponent } from './components/teacher-complete-profile/teacher-complete-profile.component';
import { ParentCompleteProfileComponent } from './components/parent-complete-profile/parent-complete-profile.component';
import { CaregiveCompleteProfileComponent } from './components/caregive-complete-profile/caregive-complete-profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ComponentsModule } from '../shared/components/components.module';
import { CovidAssesmentQuestionsComponent } from './components/covid-assesment-questions/covid-assesment-questions.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [LandingPageComponent,
     TopnavbarComponent,
    RegisterComponent,
    ContentComponent,
    FooterComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    MatchEmailDirective,
    CompleteProfileComponent,
    LoginComponent,
    EmailVerificationComponent,
    SentEmailComponent,
    TeacherCompleteProfileComponent,
    ParentCompleteProfileComponent,
    CaregiveCompleteProfileComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CovidAssesmentQuestionsComponent,],
  imports: [
    FormsModule,
    CommonModule,
    LandingPageRoutingModule,
    ComponentsModule
    // BrowserAnimationsModule
  ],
  providers: [AuthService],

})
export class LandingPageModule { }
