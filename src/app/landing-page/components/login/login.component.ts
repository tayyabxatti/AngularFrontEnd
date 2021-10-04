import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/classes/Landing-page/login/login';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileDataService, UtilityService } from 'src/app/shared/utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
auth:Login;
  constructor(private _router:Router,public userprofile:ProfileDataService,
    public _authService: AuthService,public _UtilityService: UtilityService) { }

  ngOnInit() {
    this.auth=new Login();
  }
  onSubmit(){
    this._authService.login(this.auth).subscribe(data=>{
      debugger;
      localStorage.setItem('Auth',data.token);
      this.userprofile.setCurrentUser=data;
         debugger;
         if(this.userprofile.getIs_completed=="False"){
          // this._router.navigate(["completeProfile"]);
          this.naviateToCompleteProfile(this.userprofile.getRole);
          }else{this.navigateToUrl(this.userprofile.getRole);}
    })
    console.log(this.auth);
  }
  public naviateToCompleteProfile(role:string){
    this._UtilityService.displayNotification('logged in successfully', 'success');
    
    if(role=="Admin")
    {
      this._router.navigate(["admin"]);
    }
    if(role=="Teacher")
    {
      this._router.navigate(["teacher-complete-profile"]);
    }
    if(role=="Parent")
    {
      this._router.navigate(["parent-complete-profile"]);
    }
    if(role=="Student")
    {
      this._router.navigate(["student-complete-profile"]);
    }if(role=="Caregiver")
    {
      this._router.navigate(["caregiver-complete-profile"]);
    }
  }

  public navigateToUrl(role:string)
  {
    this._UtilityService.displayNotification('logged in successfully', 'success');
    
    if(role=="Admin")
    {
      this._router.navigate(["admin"]);
    }
    if(role=="Teacher")
    {
      this._router.navigate(["teacher/dashboard"]);
    }
    if(role=="Parent")
    {
      this._router.navigate(["parent"]);
    }
    if(role=="Student")
    {
      this._router.navigate(["student/dashboard"]);
    }
    if(role=="Caregiver")
    {
      this._router.navigate(["caregiver/dashboard"]);
    }

  }

}
