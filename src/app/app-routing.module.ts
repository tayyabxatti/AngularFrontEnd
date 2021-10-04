import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  {
    path:'',
    loadChildren:'./landing-page/landing-page.module#LandingPageModule'
  },
  {
    path:'teacher',
    loadChildren:'./feature-modules/teacher/teacher.module#TeacherModule'
  },
  {
    path:'admin',
    loadChildren:'./feature-modules/admin/admin.module#AdminModule'
  },
  {
    path:'parent',
    loadChildren:'./feature-modules/parent/parent.module#ParentModule'
  }
  // }
  // {
  //   path: 'admin',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './feature-modules/admin/admin.module#AdminModule'
  //     }
  //   ]
  // },
  // {
  //   path: 'teacher',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './feature-modules/teacher/teacher.module#TeacherModule'
  //     }
  //   ]
  // },
  // {
  //   path: 'parent',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './feature-modules/parent/parent.module#ParentModule'
  //     }
  //   ]
  // },
  // {
  //   path: 'student',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './feature-modules/student/student.module#StudentModule'
  //     }
  //   ]
  // }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
