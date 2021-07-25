import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestResultService } from 'src/app/services/api/test-results.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  results:any
  user:any;

  constructor(
    private testResultService: TestResultService,
    private route: ActivatedRoute,
    private userStoreService: UserStoreService
    ) { }

  ngOnInit(): void {
    this.testResultService.getResultsByTest(this.route.snapshot.queryParams.testId).subscribe(
      success => {
        this.results = success
        console.log(success);
        
      }
    )

    this.userStoreService.user.subscribe(
      user =>{
        this.user = user
      }
    )
  }

}
