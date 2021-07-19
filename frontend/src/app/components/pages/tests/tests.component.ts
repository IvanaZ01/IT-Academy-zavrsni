import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Test } from 'src/app/models/Test.model';
import { GroupService } from 'src/app/services/api/group.service';
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
  //edit and create 
  selectGroups:any = [{group_id: '', status:""}]
  newTest: any = {}
  editActive = false


  constructor(
    private testService: TestService,
    private userStoreService: UserStoreService,
    private notifications: ToastrService,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.userStoreService.user.subscribe(user => {
      if (user != null) {
        this.user = user;
      } else {
        this.user = null;
      }
    });

    this.getAllTests()

    this.groupService.getAll().subscribe(
      success => {
        this.selectGroups = this.selectGroups.concat(success)
      }
    )
  }

  getAllTests(){
    this.testService.getTests(this.user.group_id).subscribe(
      success=>{
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

  updateTest(){
    this.testService.update(this.newTest).subscribe(
      success=>{
        this.getAllTests()
        this.notifications.success('Test successfully updated')
        this.closeEditor()
      }
    )
  }

  openEditor(info?:any){
    const date = new Date(Date.parse(info.scheduled)).toLocaleDateString().split('/')
    const dateFormat = [date[2], date[1], date[0]].join('/')
    
    this.editActive = true
    this.newTest.groupId = info.group_id || ''
    this.newTest.status = info.status || ''
    this.newTest.name = info.name || ''
    this.newTest.date = dateFormat || ''
    this.newTest.id = info.test_id 
  }

  closeEditor(){
    this.editActive = false
  }

}
