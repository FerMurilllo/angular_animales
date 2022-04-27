import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardGuard implements CanActivate {
  constructor (private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('Token')
      console.log(token); 
      if(localStorage.getItem('Token') != null){
        console.log("Tiene Token"); 
        return true
      }
      this.router.navigate(['/'])
      console.log("No Tiene Token"); 
      return false;
  }
}
