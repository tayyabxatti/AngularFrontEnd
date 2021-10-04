import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilityService, ValidationService } from 'src/app/shared/utility';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng5-validation';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { element } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  loginForm: FormGroup;
  public submitted = false;


  saveRoleDropdownData: any = [];
  rolesDropDown: any = [];
  roleSelectedOption: any;

  saveClassDropdownData:any=[];
  classDropDown:any=[];
  classSelectedOption:any;

  constructor(public _UtilityService: UtilityService, 
    private fb: FormBuilder,
    public authService: AuthService, 
    private router: Router, 
    public validationService: ValidationService) 
    { 

    }

  ngOnInit() {
    //localStorage.clear();
    this.initLoginForm();
    this.userRoles();
    this.userClasses();
  }
userRoles(){
  this.saveRoleDropdownData=[];
  this.authService.getRoles().subscribe(data=>{
    data.forEach(element => {
      this.saveRoleDropdownData.push({ value: element.roleId, label: element.roleName});        
    });
    this.rolesDropDown=this.saveRoleDropdownData;
  });
}

userClasses(){
  this.saveClassDropdownData=[];
  debugger;
  this.authService.getClassList().subscribe(data=>{
    data.forEach(element => {
      this.saveClassDropdownData.push({value:element.classId,label:element.className});  
    });
    this.classDropDown=this.saveClassDropdownData;
  });
}

  initLoginForm() {
    this.loginForm = this.fb.group({
      firstName: [null, [Validators.required, CustomValidators.rangeLength([3, 32]), RxwebValidators.alpha()]],
      lastName: [null, [Validators.required, CustomValidators.rangeLength([3, 32]), RxwebValidators.alpha()]],
      userName: [null, [Validators.required, CustomValidators.rangeLength([3, 64])]],
      email: [null, [Validators.required, CustomValidators.rangeLength([3, 64]), this.validationService.validateEmail]],
      password: [null, [Validators.required,RxwebValidators.password({ validation: { maxLength: 32, minLength: 8, digit: true, specialCharacter: true } })]],
      confirmPassword: [null, [Validators.required,RxwebValidators.password({ validation: { maxLength: 32, minLength: 8, digit: true, specialCharacter: true } })]],
      roleId:[null,[Validators.required]],
      Institution:[null],
      Profession:[null],
      DegreeLevel:[null],
      classId:[null]
    });
  }

  register() {
    this.submitted = true;
    debugger;
    if (this.loginForm.valid) {
      // if(this.roleSelectedOption){
      if (this.loginForm.value.password == this.loginForm.value.confirmPassword) {
        let obj = { ...this.loginForm.value }
        obj["roleId"]=parseInt(obj["roleId"]);
        this.authService.register(obj).subscribe(data => {
        this.navigateToUrl();
      });
      }
      else{
        this._UtilityService.displayNotification('Password Should be Matched', 'error');
      }
    }
  }
  

  onSubmit() {
    this.markFormGroupTouched(this.loginForm)
    this.submitted = true;
    if (this.loginForm.invalid) {
      this._UtilityService.displayNotification('Invalid Data', 'error');
      return;
    }
    else
      this.register();
  }

  markFormGroupTouched(formGroup: FormGroup) {
    if (Reflect.getOwnPropertyDescriptor(formGroup, 'controls')) {
      (<any>Object).values(formGroup.controls).forEach(control => {
        if (control instanceof FormGroup) {
          // FormGroup
          this.markFormGroupTouched(control);
        }
        // FormControl
        control.markAsTouched();
      });
    }
  }

  public navigateToUrl()
  {
    this._UtilityService.displayNotification('Data Register Successfully', 'success', 'Hello');
      this.router.navigate(["/login"]);
  }


}
