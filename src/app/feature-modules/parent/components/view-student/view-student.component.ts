import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailDto } from 'src/app/classes/Parent/student';
import { ParentService } from 'src/app/services/parent/parent.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  studentId:string;
  obj_student_detail:StudentDetailDto;
  constructor(public _parentService:ParentService,private route: ActivatedRoute) 
  {
    this.obj_student_detail=new StudentDetailDto();
  }

  ngOnInit() {
    this.studentId=this.route.snapshot.params['id'];
    this.getStudentDetails();
  }
  getStudentDetails(){
    this._parentService.GetStudentDetails(this.studentId).subscribe(data=>{
      console.log(data);
      this.obj_student_detail=data;
      this.obj_student_detail.image= 'data:image/jpeg;base64,' + this.obj_student_detail.image;
    })
  }

}
