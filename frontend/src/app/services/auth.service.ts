import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');

    return token != null;
  }

  isAdministrator() {
    const userData = localStorage.getItem('user');

    if (userData != null) {
      const user = JSON.parse(userData);

      return user.role == 'ADMIN';
    }

    return false;
  }
}
