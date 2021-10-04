import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/shared/utility';

@Component({
  selector: 'app-teacher-complete-profile',
  templateUrl: './teacher-complete-profile.component.html',
  styleUrls: ['./teacher-complete-profile.component.css']
})
export class TeacherCompleteProfileComponent implements OnInit {
  firstname:string;
  lastname:string;
  constructor(public userprofile:ProfileDataService) 
  {

  }

  ngOnInit() {
    this.getProfileInfo();
  }
  getProfileInfo(){
    this.firstname=this.userprofile.getFirstName;
    this.lastname=this.userprofile.getLastName;
  }

}
