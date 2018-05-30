import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { UserService } from './user.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // we use switchMap to SWITCH to the NEW observable, which is returned from the userService.get() call
    return this.auth.appUser$.map(appUser => appUser.isAdmin);
  }
}
