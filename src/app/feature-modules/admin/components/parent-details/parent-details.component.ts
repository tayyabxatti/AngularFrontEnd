import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timeStamp } from 'console';
import { ParentCovidAnswer, ParentDetails } from 'src/app/classes/admin/admin';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-parent-details',
  templateUrl: './parent-details.component.html',
  styleUrls: ['./parent-details.component.css']
})
export class ParentDetailsComponent implements OnInit {
user_id:any;
obj_parent_detail:ParentDetails;
obj_covid_ans:ParentCovidAnswer[];
  constructor(public _adminService:AdminService,private route: ActivatedRoute,private _router:Router) 
  {
    this.obj_parent_detail=new ParentDetails();
    this.obj_covid_ans=[];
  }

  ngOnInit() {
    this.user_id=this.route.snapshot.params['id'];
    this.getParentDetails();
    this.getParentCovidAnswer();
  }

  getParentDetails(){
    this._adminService.getParentDetails(this.user_id).subscribe(data=>{
      if(data){
        this.obj_parent_detail=data;
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
    })
  }

}
