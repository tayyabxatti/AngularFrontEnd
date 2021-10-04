import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentListDto } from 'src/app/classes/Parent/student';
import { ParentService } from 'src/app/services/parent/parent.service';
import { ProfileDataService } from 'src/app/shared/utility';
import { UtilityService } from 'src/app/shared/utility/utility.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
lst_student:StudentListDto[];
  
  constructor(private router: Router,public _parentService:ParentService,
    public _UtilityService: UtilityService,public userprofile:ProfileDataService) {
      this.lst_student=[];
    }

  ngOnInit() {
    this.getParentStudentList();
  }

  getParentStudentList(){
    var parentId=parseInt(this.userprofile.getAssosiatedId);
    this._parentService.GetParentStudent(parentId).subscribe(data=>{
      if(data){
        debugger;
        console.log(data);
        this.lst_student=data;
        this.lst_student.forEach(x=>{
          x.content = 'data:image/jpeg;base64,' + x.content;
        });
      }else{

      }
    });
  }

  navigateToDetails(id:any){
    this.router.navigate(["/parent/view-student/"+id]);
  }
}
