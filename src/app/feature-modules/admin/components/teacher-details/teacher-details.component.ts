import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentCovidAnswer, TeacherDetail } from 'src/app/classes/admin/admin';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  user_id:any;
  obj_teacher_detail:TeacherDetail;
obj_covid_ans:ParentCovidAnswer[];


  constructor(public _adminService:AdminService,private _router:Router,private route: ActivatedRoute)
  {
    this.obj_teacher_detail=new TeacherDetail();
    this.obj_covid_ans=[];
  }

  ngOnInit() {
    this.user_id=this.route.snapshot.params['id'];
    this.getParentDetails();
    this.getParentCovidAnswer();
    
  }

  getParentDetails(){
    this._adminService.getTeacherDetails(this.user_id).subscribe(data=>{
      if(data){
        debugger;
        console.log(data);
        this.obj_teacher_detail=data;
      }else{

      }
    });
  }

  getParentCovidAnswer(){
    this._adminService.getParentCovidAnswers(this.user_id).subscribe(data=>{
      if(data){
        this.obj_covid_ans=data;
      console.log(data);
      }else{

      }
    });
  }

}
