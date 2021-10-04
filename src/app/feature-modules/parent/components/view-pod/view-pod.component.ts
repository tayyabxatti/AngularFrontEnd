import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignPodStudent, PodDetailResponse } from 'src/app/classes/Parent/pod';
import { StudentListDd, StudentListDto } from 'src/app/classes/Parent/student';
import { ParentService } from 'src/app/services/parent/parent.service';
import { ProfileDataService, UtilityService } from 'src/app/shared/utility';

@Component({
  selector: 'app-view-pod',
  templateUrl: './view-pod.component.html',
  styleUrls: ['./view-pod.component.css']
})
export class ViewPodComponent implements OnInit {
parentPodID:any;
obj_pod_details:PodDetailResponse;
lst_student:StudentListDd[];
obj_assign:AssignPodStudent;
  constructor(public _UtilityService: UtilityService,public userprofile:ProfileDataService,public _parentService:ParentService,private route: ActivatedRoute) 
  {
    this.obj_pod_details=new PodDetailResponse();
    this.obj_assign=new AssignPodStudent();
    this.lst_student=[];
  }

  ngOnInit() {
    this.parentPodID=this.route.snapshot.params['id'];
    this.getPodDetails();
    this.getParentStudentList();
    
  }

  getPodDetails(){
    this._parentService.GetPendingPodsDetails(this.parentPodID).subscribe(data=>{
      console.log(data);
      this.obj_pod_details=data;
      // this.obj_student_detail=data;
      // this.obj_student_detail.image= 'data:image/jpeg;base64,' + this.obj_student_detail.image;
    });
  }

  getParentStudentList(){
    var parentId=parseInt(this.userprofile.getAssosiatedId);
    this._parentService.GetParentStudent(parentId).subscribe(data=>{
      if(data){
        debugger;
        console.log(data);
        this.lst_student=data;
        
      }else{

      }
    });
  }

  assignPodStudent(){
      this.obj_assign.PodID=parseInt(this.parentPodID);
      this.obj_assign.StudentID=parseInt(this.obj_assign.StudentID.toString());
      this._parentService.AssignParentPod(this.obj_assign).subscribe(data=>{
        if(data.success){
          this._UtilityService.displayNotification(data.message, 'success');

        }else{
          this._UtilityService.displayNotification(data.message, 'error');

        }
      })
  }

}
