import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private _router:Router,  private route: ActivatedRoute,public _authService: AuthService) { }
  user_id:string='';
  email_verified:boolean;
  ngOnInit() {
    // this.route.paramMap.subscribe(params=>{
    //   debugger;
    //   this.user_id=params['id'];
    // });
    this.user_id=this.route.snapshot.params['id'];
    console.log(this.user_id);
    this.VerifyEmail();
    
  }

  VerifyEmail(){
    this._authService.verifyEmail(this.user_id).subscribe(data=>{
      debugger;
      if(data==true){
        this.email_verified=true;
      }
      else{
        this.email_verified=false;
      }
    })
  }

}
