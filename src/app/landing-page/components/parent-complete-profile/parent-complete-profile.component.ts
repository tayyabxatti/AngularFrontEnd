import { Component, OnInit } from '@angular/core';
import { ProfileDataService, UtilityService } from 'src/app/shared/utility';
import {Parent} from 'src/app/classes/Parent/parent'
import { AuthService } from 'src/app/services/auth/auth.service';
import { parse } from 'error-stack-parser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent-complete-profile',
  templateUrl: './parent-complete-profile.component.html',
  styleUrls: ['./parent-complete-profile.component.css']
})
export class ParentCompleteProfileComponent implements OnInit {
  firstname:string;
  lastname:string;
  parent_obj: Parent;
  fileTableName: string = 'ProfileImage';
  avatar:any;
  next:boolean=false;
  public response: { 'dbPath': '' };

  constructor(private _router:Router,public _UtilityService: UtilityService,public userprofile:ProfileDataService,public _authService: AuthService) 
  {
    this.parent_obj=new Parent();
  }

  ngOnInit() {
    this.getProfileInfo();
  }
  getProfileInfo(){
    this.firstname=this.userprofile.getFirstName;
    this.lastname=this.userprofile.getLastName;
    this.userprofile.getUserId;
  }
  
  validate():boolean{
    debugger;
    if(this.parent_obj.Country=="Select Country"){
      this._UtilityService.displayNotification("Please select a country", 'error');
      return false;
    }else if(this.parent_obj.City=='' || this.parent_obj.City==undefined || this.parent_obj.City==null){
      this._UtilityService.displayNotification("Please enter your city", 'error');
      return false;
    }else if(this.parent_obj.State=='Select State'){
      this._UtilityService.displayNotification("Please select a state", 'error');
      return false;
    }else if(this.parent_obj.Street=='' || this.parent_obj.Street==undefined || this.parent_obj.Street==null){
      this._UtilityService.displayNotification("Please enter your street", 'error');
      return false;
    }else if(this.parent_obj.ZipCode=='' || this.parent_obj.ZipCode==undefined || this.parent_obj.ZipCode==null){
      this._UtilityService.displayNotification("Please enter your zip code", 'error');
      return false;
    }else if(this.parent_obj.Pod_Primary_Language=="Select Pod Primary Speaking Language"){
      this._UtilityService.displayNotification("Please Select Pod Primary Speaking Language", 'error');
      return false;
    }else if(this.parent_obj.Pod_Secondary_Language=="Select Pod Secondary Speaking Language"){
      this._UtilityService.displayNotification("Please Select Pod Secondary Speaking Language", 'error');
      return false;
    }else if(this.parent_obj.Parent_Status=="Select Parent Status"){
      this._UtilityService.displayNotification("Please Select Parent Status", 'error');
      return false;
    }else if(this.parent_obj.Caregiver_Status=="Select Caregiver Status"){
      this._UtilityService.displayNotification("Please Select Caregiver Status", 'error');
      return false;
    }else if(this.parent_obj.Pod_Learning_Environment=="Select Pod Learning Environment"){
      this._UtilityService.displayNotification("Please Select Pod Learning Environment", 'error');
      return false;
    }
    return true;
  }
  onSubmit(){
    debugger;
    if(this.validate()){
    this.parent_obj.UserId=parseInt(this.userprofile.getUserId);
    console.log(this.parent_obj);
    this._authService.AddParentDetails(this.parent_obj).subscribe(data=>{
      debugger;
      if(data.success==true){
        this._UtilityService.displayNotification(data.message, 'success');
        this._router.navigate(["covid-19-assesment"]);

      }else{
        this._UtilityService.displayNotification(data.message, 'error');

      }
    })
  }
  }

  public uploadFinished = (event) => {
    debugger;
    this.parent_obj.Profile_Image= event.profile_Image_Id;
    this.response = event;
  }
  MoveNext(){
    this.next=true;
  }

}
