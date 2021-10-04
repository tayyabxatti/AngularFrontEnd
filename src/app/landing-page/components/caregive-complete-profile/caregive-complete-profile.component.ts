import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/shared/utility';

@Component({
  selector: 'app-caregive-complete-profile',
  templateUrl: './caregive-complete-profile.component.html',
  styleUrls: ['./caregive-complete-profile.component.css']
})
export class CaregiveCompleteProfileComponent implements OnInit {
  firstname:string;
  lastname:string;
  constructor(public userprofile:ProfileDataService) { }

  ngOnInit() {
    this.getProfileInfo();
  }
  getProfileInfo(){
    this.firstname=this.userprofile.getFirstName;
    this.lastname=this.userprofile.getLastName;
  }

}
