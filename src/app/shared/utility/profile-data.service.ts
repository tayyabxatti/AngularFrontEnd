import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
const JwtHelper = new JwtHelperService();

var userId;
var role;
var token;
var userName;
var firstName;
var lastName;
var userImage;
var is_completed;
var savedProfileData;
var assosiatedId;
@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor() { }

  set setCurrentUser(data:any) {
    token=data.token;
    firstName=data.firstName;
    lastName=data.lastName;
    userImage=data.image;
    var userData=JwtHelper.decodeToken(token);
    userId=userData.nameid;
    role=userData.role;
    userName=userData.unique_name;
    is_completed=userData.groupsid;
    assosiatedId=userData.certserialnumber;
  }
  set setAssosiatedId(data:any){
    assosiatedId=data;
  }
  set setProfileData(data:any)
  {
    savedProfileData=data;
  }
  get getAssosiatedId(){
    debugger;
    return assosiatedId;
  }
  get getIs_completed(){
    return is_completed;
  }
  set setIs_completed(data:any){
    is_completed=data;
  }
  get getProfileData() {
    return  savedProfileData;
  }

  get getUserId() {
    return  userId;
  }
  get getRole() {
    return role;
  }
  get getToken() {
    return token;
  }
  get getUserName() {
    return userName;
  }
  get getFirstName() {
    return firstName;
  }
  get getLastName() {
    return lastName;
  }
  get getUserImage() {
    return userImage;
  }
  

}
