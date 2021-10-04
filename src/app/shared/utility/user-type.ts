import { Injectable } from '@angular/core';

var userType;
@Injectable({
  providedIn: 'root'
})
export class UserType {

  constructor() { }

  set setUserType(data:any) {
      debugger;
      userType=data;
    }

  get getUserType() {
    return  userType;
  }


}
