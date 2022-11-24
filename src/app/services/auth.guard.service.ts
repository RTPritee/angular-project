import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable <boolean | UrlTree> | Promise<boolean| UrlTree >| boolean | UrlTree {
    var isAuthented = this.auth.getAuthStatus();
    if(isAuthented){
      return this.router.navigate(['/dashboard']);
    }
    return this.router.navigate(['/login']);
  }
}
