import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
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

  async canActivate(): Promise<boolean> {
    if (!this._authService.isAuthenticated()) {
      this._notificationService.error('You need to be authenticated.')
      await this._router.navigateByUrl('/login');
      
      return false;
    }

    return true;
  }
}