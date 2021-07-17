import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService{
  constructor(http: HttpClient) { 
    super('http://localhost:3000/user', http)
  }

  login(user:User){
    return this._http.post('http://localhost:3000/user-login', user)
  }
}

