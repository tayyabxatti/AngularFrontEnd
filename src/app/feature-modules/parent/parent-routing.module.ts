import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ManagePodsComponent } from './components/manage-pods/manage-pods.component';
import { ManageStudentsComponent } from './components/manage-students/manage-students.component';
import { ViewPodComponent } from './components/view-pod/view-pod.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { ParentComponent } from './parent.component';


const routes: Routes = [
  {
    path: '', component: ParentComponent,
    children: [
      {
        path: 'manage-students',
        component:ManageStudentsComponent
      },
      {
        path: 'add-student',
        component:AddStudentComponent
      },
      {
        path:'view-student/:id',
        component:ViewStudentComponent
      },
      {
        path:'manage-pod',
        component:ManagePodsComponent
      },
      {
        path:'view-pod/:id',
        component:ViewPodComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
