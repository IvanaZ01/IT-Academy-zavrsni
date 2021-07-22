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
  test:any;
  students:any;
  newResults:any = {};

  constructor(
    private testResultService: TestResultService,
    private notifications: ToastrService,
    private userService: UserService,
    private testService: TestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.testService.getById(+this.route.snapshot.queryParams.testId).subscribe(
      success => {
        this.test = success
        this.userService.filterUserByGroup(this.test.group_id).subscribe(
          success2=>{
            this.students = success2
          }
        )
      }
    )
  }

}

