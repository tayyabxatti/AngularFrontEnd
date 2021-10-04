import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegister } from 'src/app/classes/Landing-page/Register/register';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileDataService, UtilityService } from 'src/app/shared/utility';
import { UserType } from 'src/app/shared/utility/user-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnChanges,OnDestroy  {
 userType:any;
  register:UserRegister;
  constructor(public userprofile:ProfileDataService, private route: ActivatedRoute,private _router:Router
    ,private _usertype:UserType,public _authService: AuthService
    ,public _UtilityService: UtilityService ) 
  {
    // this._usertype.setUserType='';
    this.userType;
    this.register=new UserRegister();

   }
 
  ngOnInit() {
    debugger;
    this.route.params.subscribe(params => {
      debugger
      this.userType = params['type'];
      this.register.userType=this.userType;
      // this.GetUserType(); // reset and set based on new parameter this time
  });
    this.userType=this.route.snapshot.params['type'];
    this.register.userType=this.userType;
    // this.GetUserType();
  }
  ngOnChanges(){
    this.GetUserType();
  }
  GetUserType(){
    this.register.userType=this._usertype.getUserType;
    this.userType=this._usertype.getUserType;
  }
  Validate():boolean{
  return true;
  }
  RegisterUser(){
    if(this.Validate()){
      this._authService.register(this.register).subscribe(data=>{
      //   this.userprofile.setCurrentUser=data;
      //   localStorage.setItem('Auth',data.token);
      //   if(this.userprofile.getIs_completed=="False"){
      //     this._router.navigate(["email-verification/0"]);
      //     }else{this.navigateToUrl(this.userprofile.getRole);}
      // })
      // console.log(this.register);
      // if(data=="User with same email already exist"){
      //   return ;
      // }
      debugger;
      if(data.message=='Success'){
        this._router.navigate(["email-sent"]);
      }else if(data.message=='User Already Exists'){
        this._UtilityService.displayNotification('User Already Exists', 'alert');
      }
    }); 
  }
}

  
  public navigateToUrl(role:string)
  {
    this._UtilityService.displayNotification('logged in successfully', 'success');
    
    if(role=="Admin")
    {
      this._router.navigate(["admin/dashboard"]);
    }
    if(role=="Teacher")
    {
      this._router.navigate(["teacher/dashboard"]);
    }
    if(role=="Parent")
    {
      this._router.navigate(["parent/dashboard"]);
    }
    if(role=="Student")
    {
      this._router.navigate(["student/dashboard"]);
    }

  }
  ngOnDestroy(){
  this.userType='';
  }

  onSubmit() {
    // var x=atob('5');
    debugger;
   this.RegisterUser();
    console.log(this.register);
  }

}
