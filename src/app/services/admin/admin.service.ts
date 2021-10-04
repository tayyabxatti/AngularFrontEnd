
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/async-services/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private dataservice:DataService) { }

  public getParentsList(){
    return this.dataservice.genericSericeCaller("get","Admin/GetParentList","");
  }
  public getTeacherList(){
    return this.dataservice.genericSericeCaller("get","Admin/GetTeacherList","");
  }
  public getParentDetails(id:any){
    return this.dataservice.genericSericeCaller("get", "Admin/GetParentDetail/"+id, "");
  }
  public getTeacherDetails(id:any){
    return this.dataservice.genericSericeCaller("get", "Admin/GetTecherDetail/"+id, "");
  }
  public getParentCovidAnswers(id:any){
    return this.dataservice.genericSericeCaller("get", "Admin/GetParentAnswereDetail/"+id, "");
  }
  
}



