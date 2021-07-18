import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private userSource = new BehaviorSubject<any>(null);
  user = this.userSource.asObservable();

  constructor() {
    const userData = localStorage.getItem('user');

    if (userData != null) {
      this.updateUser(JSON.parse(userData));
    }
  }

  updateUser(user: any){
    this.userSource.next(user);
  }
}
