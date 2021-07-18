import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuardAdmin implements CanActivate {
    constructor(
        private authService: AuthService,
        private notifications: ToastrService,
        private router: Router

    ) { }

    canActivate() {
        if (!(this.authService.isAuthenticated() && this.authService.isAdministrator())) {
            this.notifications.error('You need to be administrator.')
            this.router.navigateByUrl('/home');
         return false; 
    }

    return true;
    }
}