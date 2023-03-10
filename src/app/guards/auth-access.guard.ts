import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserTokenService} from "../services/user-token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthAccessGuard implements CanActivate {

  constructor(private userTokenService: UserTokenService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.userTokenService.getToken();
    if (token) {
      return this.router.navigateByUrl('/home')
    }
    return true;
  }

}
