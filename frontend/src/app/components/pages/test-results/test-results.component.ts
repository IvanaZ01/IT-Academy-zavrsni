import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/Test.model';
import { User } from 'src/app/models/User.model';
import { TestResultService } from 'src/app/services/api/test-results.service';
import { TestService } from 'src/app/services/api/test.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {

  testResults:any[] = [];
  user:User|null = {};
  allTests:Test[] = [];
  testsForDrop:Test[] = [];

  constructor(
    private testResultService: TestResultService,
    private userStoreService: UserStoreService,
    private testService: TestService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userStoreService.user.subscribe(user => {
      if (user != null) {
        this.user = user;
      } else {
        this.user = null;
      }
    });

    this.getAllResults()

    this.testService.getAll().subscribe(
      success=>{
        this.allTests = success
        this.testsForDrop = success.filter(test => test.status != "Finished").map(test => {
          return {id: test.test_id, name: test.name}
        })
      }
    )
  }

  getAllResults(){
    this.testResultService.getAllResults(this.user!.group_id).subscribe(
      success=>{
        this.testResults = success
      }
    )
  }

  navigate(id?:number){
    if(this.user?.role === "ADMIN"){
      this.router.navigateByUrl('admin/create-results?testId=' + id)
    }else{
      this.router.navigateByUrl(`result?testId=${id}`)
    }
  }

}
