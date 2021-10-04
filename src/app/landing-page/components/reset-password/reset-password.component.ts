import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from 'src/app/classes/Landing-page/ForgotPassword/reset-password';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilityService } from 'src/app/shared/utility';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPassObj:ResetPassword;
  emailaddress:string;
  constructor(private _router:Router,public _UtilityService: UtilityService,private route: ActivatedRoute,public _authService: AuthService) { 
    this.emailaddress='';
    this.resetPassObj=new ResetPassword();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      debugger
      this.emailaddress = params['email'];
      this.resetPassObj.email=this.emailaddress;
      // this.GetUserType(); // reset and set based on new parameter this time
  });
    // this.emailaddress=this.route.snapshot.params['id'];
    console.log(this.emailaddress);
  }
  onSubmit(){
    this.resetPassObj.email=this.emailaddress;
    console.log(this.resetPassObj);
    this._authService.verifyforgotPassword(this.resetPassObj).subscribe(data=>{
      debugger;
      if(data.success==true){
        this._UtilityService.displayNotification(data.message, 'success');
      this._router.navigate(["login"]);
      }
      else{
      this._UtilityService.displayNotification(data.message, 'error');
      // this._router.navigate(["login"]);
      }
    })
  }

}
