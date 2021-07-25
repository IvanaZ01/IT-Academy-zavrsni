import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestResultService } from 'src/app/services/api/test-results.service';
import { TestService } from 'src/app/services/api/test.service';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-create-results',
  templateUrl: './create-results.component.html',
  styleUrls: ['./create-results.component.scss'],
})
export class CreateResultsComponent implements OnInit {
  test: any = {};
  students: any;
  newResults: any = {};
  studentResults:any = [];
  singleScore = 0

  constructor(
    private testResultService: TestResultService,
    private notifications: ToastrService,
    private userService: UserService,
    private testService: TestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.testService
      .getById(+this.route.snapshot.queryParams.testId)
      .subscribe((success) => {
        this.userService
          .filterUserByGroup(success.group_id)
          .subscribe((success2) => {
            this.students = success2;
          });

        this.test.id = success.test_id;
        this.test.groupId = success.group_id;
        this.test.date = new Date(success.scheduled)
          .toLocaleDateString()
          .split('/')
          .reverse()
          .join('/');
        this.test.name = success.name;
        this.test.status = 'Finished';

        this.getResults()
        
        this.testService.update(this.test).subscribe((success) => {
          this.notifications.success('Test status updated to "Finished".');
        });
      });

  }


  addScore(id:number, score:any, btn:any){
    let result = {testId: this.test.id, userId: id, score: this.singleScore}
    this.testResultService.createTestResult(result).subscribe(
      success => {
        this.getResults()

        this.singleScore = 0
        this.swapInputBtn(score, btn)
      }
    )

  }

  getResults(){
    this.testResultService.getResultsByTest(this.test.id).subscribe(
      success =>{
       this.studentResults = success
      }
    )
  }

  getScore(id: number) {
    return this.studentResults.filter((score:any) => score.user_id === id)[0] || '';
  }

  swapInputBtn(input:any, btn:any){
    let focus = false;
    if(input.parentElement.hidden){
      focus = true
    }
    input.parentElement.hidden = !input.parentElement.hidden
    btn.hidden = !btn.hidden

    if(focus){
      input.focus()
    }
  }
}
