import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentList, TeacherList } from 'src/app/classes/admin/admin';
import { AdminService } from 'src/app/services/admin/admin.service';
import { UtilityService } from 'src/app/shared/utility';

@Component({
  selector: 'app-manage-parents',
  templateUrl: './manage-parents.component.html',
  styleUrls: ['./manage-parents.component.css']
})
export class ManageParentsComponent implements OnInit {
lst_parent:ParentList[];
    constructor(public _adminService:AdminService,private router: Router,
      public _UtilityService: UtilityService) 
  {
    this.lst_parent=[];
  }

  ngOnInit() {
    this.getParentList();
  }

 

  getParentList(){
    this._adminService.getParentsList().subscribe(data=>{
      this.lst_parent=data;
      console.log(this.lst_parent);
    })
  }
  loadParentDetails(userId:any){
    this.router.navigate(["admin/parent-detail/"+userId]);
  }
  
}
