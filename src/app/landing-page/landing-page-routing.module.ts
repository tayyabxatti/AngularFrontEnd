import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaregiveCompleteProfileComponent } from './components/caregive-complete-profile/caregive-complete-profile.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { ContentComponent } from './components/content/content.component';
import { CovidAssesmentQuestionsComponent } from './components/covid-assesment-questions/covid-assesment-questions.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ParentCompleteProfileComponent } from './components/parent-complete-profile/parent-complete-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SentEmailComponent } from './components/sent-email/sent-email.component';
import { TeacherCompleteProfileComponent } from './components/teacher-complete-profile/teacher-complete-profile.component';
import { LandingPageComponent } from './landing-page.component';


const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component:ContentComponent
      },
      {
        path:'register/:type',
        component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'completeProfile',
        component:CompleteProfileComponent
      },
      {
        path:'teacher-complete-profile',
        component:TeacherCompleteProfileComponent
      },
      {
        path:'parent-complete-profile',
        component:ParentCompleteProfileComponent
      },
      {
        path:'caregiver-complete-profile',
        component:CaregiveCompleteProfileComponent
      },
      {
        path:'email-verification/:id',
        component:EmailVerificationComponent
      },
      {
        path:'email-sent',
        component:SentEmailComponent
      },
      {
        path:'forgot-password',
        component:ForgotPasswordComponent
      },
      {
        path:'reset-password/:email',
        component:ResetPasswordComponent
      },
      {
        path:'covid-19-assesment',
        component:CovidAssesmentQuestionsComponent
      }  
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
