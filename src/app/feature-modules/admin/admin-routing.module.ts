import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageParentsComponent } from './components/manage-parents/manage-parents.component';
import { ManageTeachersComponent } from './components/manage-teachers/manage-teachers.component';
import { ParentDetailsComponent } from './components/parent-details/parent-details.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';


// const routes: Routes = [];

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: 'manage-parents',
        component:ManageParentsComponent
      },
      {
        path:'manage-teachers',
        component:ManageTeachersComponent
      },
      {
        path:'parent-detail/:id',
        component:ParentDetailsComponent
      },
      {
        path:'teacher-detail/:id',
        component:TeacherDetailsComponent
      }
      // {
      //   path: 'dashboard',
      //   component:DashboardComponent
      // }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
