import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public _authService: AuthService,
    public _router: Router,
    private _notificationService: ToastrService,
  ) {

  }

 canActivate(route:any, state:RouterStateSnapshot){
    if (!this._authService.isAuthenticated()) {
      this._notificationService.error('You need to be authenticated.')
      this._router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
      
      return false;
    }

    return true;
  }
}