import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { AdminComponent } from './admin.component';
import { ManageParentsComponent } from './components/manage-parents/manage-parents.component';
import { ParentDetailsComponent } from './components/parent-details/parent-details.component';
import { ManageTeachersComponent } from './components/manage-teachers/manage-teachers.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';


@NgModule({
  declarations: [SidenavbarComponent,AdminComponent, ManageParentsComponent, ParentDetailsComponent, ManageTeachersComponent, TeacherDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
