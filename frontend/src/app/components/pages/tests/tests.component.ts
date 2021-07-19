import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestService } from 'src/app/services/api/test.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  tests:any;
  user:any;

  constructor(
    private testService: TestService,
    private userStoreService: UserStoreService,
    private notifications: ToastrService
  ) { }

  ngOnInit(): void {
    this.userStoreService.user.subscribe(user => {
      if (user != null) {
        this.user = user;
      } else {
        this.user = null;
      }
    });

    this.getAllTests()
  }

  getAllTests(){
    this.testService.getTests(this.user.group_id).subscribe(
      success=>{
        console.log(success)
        this.tests = success
      }
    )
  }

  deleteTest(id:number){
    const sure = confirm('Are you sure you want to delete test with id ' + id)
    if(sure){
      this.testService.delete(id).subscribe(
        success=>{
          this.getAllTests()
          this.notifications.success("Test deleted")
        }
      )
    }
  }

}
