import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService,
     private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn(state.url);
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean{
    return this.checkLoggedIn(segments.join('/'));
  }

  checkLoggedIn(url: string): boolean {
      if(this.userService.isLoggedIn){
        return true; 
      }

      this.userService.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
  }
  
}
