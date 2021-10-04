import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileDataService } from '../utility';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,public jwtHelper: JwtHelperService,public userprofile:ProfileDataService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    // 
    const token = this.userprofile.getToken;
    var validToken= !this.jwtHelper.isTokenExpired(token);
    if (validToken) {
      return true;
    }

    // Navigate to the login page with extras
    this.router.navigate(['/login'], { queryParams: { returnUrl: url } });
    return false;
  }
}
