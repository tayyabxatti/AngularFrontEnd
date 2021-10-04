import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ParentSidenavbarComponent } from './parent-sidenavbar/parent-sidenavbar.component';
import { ManageStudentsComponent } from './components/manage-students/manage-students.component';
import { ParentComponent } from './parent.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { ManagePodsComponent } from './components/manage-pods/manage-pods.component';
import { ViewPodComponent } from './components/view-pod/view-pod.component';


@NgModule({
  declarations: [ParentSidenavbarComponent,ParentComponent, ManageStudentsComponent,
     AddStudentComponent, ViewStudentComponent, ManagePodsComponent, ViewPodComponent],
  imports: [
    CommonModule,
    ParentRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class ParentModule { }
