import { Component, OnInit } from '@angular/core'
import { ProfileDataService, UtilityService, ValidationService } from 'src/app/shared/utility'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'
import { Router } from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt'

const JwtHelper = new JwtHelperService();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted = false;
  constructor(public _UtilityService: UtilityService, private fb: FormBuilder,
    public authService: AuthService, private router: Router, 
    public validationService: ValidationService,public userprofile:ProfileDataService) { }

  ngOnInit() {
    this.initLoginForm();
    localStorage.clear();
    // this._UtilityService.displayNotification('this is testing', 'error', 'Hello');
  }
  public initLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
    this.loginForm.setValue({
      'username': 'PT1122',
      'password': 'test1234'
    })
  }
  public onSubmit(event: Event, form: any): void {
    event.stopPropagation();
    this.submitted = true;
    if (this.loginForm.valid) {
      this.authService.login(form).subscribe(data => {
         this.userprofile.setCurrentUser=data;
         localStorage.setItem('Auth',data.token);
       this.navigateToUrl(this.userprofile.getRole);
      });
    }
  }

  public navigateToUrl(role:string)
  {
    this._UtilityService.displayNotification('logged in successfully', 'success');
    if(role=="Admin")
    {
      this.router.navigate(["admin/dashboard"]);
    }
    if(role=="Teacher")
    {
      this.router.navigate(["teacher/dashboard"]);
    }
    if(role=="Parent")
    {
      this.router.navigate(["parent/dashboard"]);
    }
    if(role=="Student")
    {
      this.router.navigate(["student/dashboard"]);
    }

  }

}
