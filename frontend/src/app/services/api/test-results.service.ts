import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TestResultService {
  url = 'http://localhost:3000/test-result'

  constructor(private http: HttpClient) {}

  createTestResult(resource: any) {
    return this.http.post(this.url + '-create', resource);
  }

  deleteTestResults(testId:number, user_id:number){
    return this.http.delete(`${this.url}-delete/${testId}/${user_id}`)
  }

  getAllResults(groupId?:number){
     return this.http.get(this.url + "-get-all" + `?groupId=${groupId}`)
  }

  getResultsByTest(testId:number){
     return this.http.get(this.url + "-get-all/" + `${testId}`)
  }
}