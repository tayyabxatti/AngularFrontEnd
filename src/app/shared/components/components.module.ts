import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ProfileService } from './../services/profile/profile.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ElikserDropdownComponent } from './elikser-dropdown/elikser-dropdown.component';
import { Select2Module } from 'select2-angular-component';

/** Custom Components Registration*/
export const COMPONENTS = [
  PageNotFoundComponent,
  FileUploadComponent,
  ElikserDropdownComponent

];

@NgModule({
  imports: [
/*
* Angular core dependencies */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    /** Third party modules */
    TranslateModule,
    NgDatepickerModule,
    SelectDropDownModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    Select2Module
  ],
  providers: [ProfileService],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
