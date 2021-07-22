import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TestService extends ApiService{

  constructor(http: HttpClient) { 
    super('http://localhost:3000/test', http)
  }

  getTests(id:any){
     return this._http.get<any[]>('http://localhost:3000/test-get-all/' + id)
  }
}