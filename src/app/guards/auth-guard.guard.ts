import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppUrlsService } from '../services/app-urls.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(public login:AppUrlsService,public router : Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.isUserLoggedIn() && this.login.getUserRole() == "ADMIN"){
        return true;
      }else if(this.login.isUserLoggedIn() && this.login.getUserRole() === "USER"){
        this.router.navigate(['user']);
        return false;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    
  }
  
}
