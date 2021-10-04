import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentList, TeacherList } from 'src/app/classes/admin/admin';
import { AdminService } from 'src/app/services/admin/admin.service';
import { UtilityService } from 'src/app/shared/utility';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.css']
})
export class ManageTeachersComponent implements OnInit {
  lst_teacher:TeacherList[];

  constructor(public _adminService:AdminService,private router: Router,
    public _UtilityService: UtilityService) {
    this.lst_teacher=[];

   }

  ngOnInit() {
    this.getTeacherList();

  }

  getTeacherList(){
    this._adminService.getTeacherList().subscribe(data=>{
      this.lst_teacher=data;
      console.log(this.lst_teacher);
    });
  }
  loadTeacherDetails(userId:any){
    this.router.navigate(["admin/teacher-detail/"+userId]);
  }

}
