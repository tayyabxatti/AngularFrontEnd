import { DataService } from './../../async-services/http/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public dataservice:DataService) { }

  public getProfileData()
  {
    return this.dataservice.genericSericeCaller("get","Profile/GetProfileData","");
  }

  public updateTeacherProfile(userprofile:any)
  {
    return this.dataservice.genericSericeCaller("post","Profile/UpdateTeacherProfile",userprofile);
  }

  public updateStudentProfile(userprofile:any)
  {
    return this.dataservice.genericSericeCaller("post","Profile/UpdateStudentProfile",userprofile);
  }
  public updateTeacherAttribute(updatedExperience:any)
  {
    return this.dataservice.genericSericeCaller("post","Profile/UpdateTeacherAttribute",updatedExperience);
  }
  public updateTeacherSkill(updatedExperience:any)
  {
    return this.dataservice.genericSericeCaller("post","Profile/UpdateTeacherSkill",updatedExperience);
  }
}
