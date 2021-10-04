import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserType } from 'src/app/shared/utility/user-type';


@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor(private _router: Router,private _usertype:UserType ) {
    
   }

  ngOnInit() {
    
  }
  navigateRoute(userType:string){
    debugger;
    if(userType=='Teacher'){
      this._usertype.setUserType='Teacher';
      this._router.navigateByUrl('/register/Teacher');
    }else if(userType=='Pod'){
      this._usertype.setUserType='Pod';
      this._router.navigateByUrl('/register/Pod');
    }else if(userType=='Parent'){
      this._usertype.setUserType='Parent';
      this._router.navigateByUrl('/register/Parent');
    }else if(userType=='Caregiver'){
      this._usertype.setUserType='Caregiver';
      this._router.navigateByUrl('/register/Caregiver');
    }
  }
}
