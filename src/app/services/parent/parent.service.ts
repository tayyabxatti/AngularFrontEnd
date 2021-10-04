import { Injectable } from '@angular/core';
import { json } from '@rxweb/reactive-form-validators';
import { DataService } from 'src/app/shared/async-services/http';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private dataservice:DataService) {}
  //STUDENTS
  public getStudents(user_id:any){
    return this.dataservice.genericSericeCaller("get","Parent/StudenList/"+user_id,"");
  }
  public postStudents(object:any){
    return this.dataservice.genericSericeCaller("post", "Parent/AddStudent",object);
  }
  public getLearningStyleDD(){
    return this.dataservice.genericSericeCaller("get","Admin/DropDownLearning","");
  }
  public getGradeLevelDD(){
    return this.dataservice.genericSericeCaller("get","Admin/GetGradeLevel","");
  }
  public getPodLearnngSubjectDD(){
    return this.dataservice.genericSericeCaller("get","Admin/DropDownSubject","");
  }
  public getSpecialNeedsDD(){
    return this.dataservice.genericSericeCaller("get","Admin/GetSpecialNeedService","");
  }
  public AddStudent(object: any) {
    return this.dataservice.genericSericeCaller("post", "Parent/AddStudent",object);
  }
  public GetParentStudent(object:any){
    return this.dataservice.genericSericeCaller("get","Parent/GetParentStudents/"+object,"");
  }
  public GetStudentDetails(object:any){
    return this.dataservice.genericSericeCaller("get","Parent/GetStudentDetail/"+object,"");
  }
  //PODS
  public GetPendingPods(object:number){
    return this.dataservice.genericSericeCaller("get","Parent/GetPendingPod/"+object,"");
  }
  public GetPendingPodsDetails(pendingPodId:number){
    return this.dataservice.genericSericeCaller("get","Parent/GetPendingPodDetail/{ParentPodID}?ParentPodID="+pendingPodId,"");
  }
  public AssignParentPod(object:any){
    return this.dataservice.genericSericeCaller("post", "Parent/AssignPodToStudent",object); 
  }
  
}


