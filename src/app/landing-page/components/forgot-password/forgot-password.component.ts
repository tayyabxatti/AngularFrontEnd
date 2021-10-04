import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from 'src/app/classes/Landing-page/ForgotPassword/forgot-password';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilityService } from 'src/app/shared/utility';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPassword:ForgotPassword;
  constructor(public _authService: AuthService,public _UtilityService: UtilityService) 
  {
    this.forgotPassword=new ForgotPassword();
  }

  ngOnInit() 
  {
  
  }
  onSubmit(){
    console.log(this.forgotPassword.Email);
    this._authService.forgotPasswordEmail(this.forgotPassword).subscribe(data=>{
      if(data.success){
        this._UtilityService.displayNotification(data.message, 'success');
      }else{
        this._UtilityService.displayNotification(data.message, 'alert');
      }
      console.log(data.message);
    });
  }
}
