import { Injectable } from '@angular/core';
import { json } from '@rxweb/reactive-form-validators';
import { DataService } from 'src/app/shared/async-services/http';

@Injectable()
export class AuthService {
  constructor(private dataservice:DataService) {}

  public login(form: any){
    return this.dataservice.genericSericeCaller("post","Authenticate/login",form);
  }

  public getRoles(){
    return this.dataservice.genericSericeCaller("get","Authenticate/GetRoles","");
  }
  public getClassList(){
    return this.dataservice.genericSericeCaller("get", "Class/GetClassess", "");  
  }
  public register(object: any) {
    return this.dataservice.genericSericeCaller("post", "Authenticate/Register",object);
  }
  public verifyEmail(id:any){
    return this.dataservice.genericSericeCaller("get", "Authenticate/VerifyEmail/"+id, "");
  }
  public forgotPasswordEmail(object: any) {
    return this.dataservice.genericSericeCaller("post", "Authenticate/  ",object);
  }

  public verifyforgotPassword(object: any) {
    return this.dataservice.genericSericeCaller("post", "Authenticate/VerifyForgotPassword",object);
  }
  public AddParentDetails(object: any) {
    return this.dataservice.genericSericeCaller("post", "Authenticate/AddParent",object);
  }
  
  
}
