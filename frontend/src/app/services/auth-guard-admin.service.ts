import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardAdmin implements CanActivate {
  constructor(
    private authService: AuthService,
    private notifications: ToastrService,
    private router: Router,
  ) {}

  canActivate(route:any, state:RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
        this.notifications.error('You need to be authenticated.');
        this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
      return false;

    } else if (!this.authService.isAdministrator()) {
        this.notifications.error('You need to be administrator.');
        this.router.navigateByUrl('/home');
      return false;
    }

    return true;
  }
}
