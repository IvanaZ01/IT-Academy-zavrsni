import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Group } from 'src/app/models/Groups.model';
import { Test } from 'src/app/models/Test.model';
import { User } from 'src/app/models/User.model';
import { GroupService } from 'src/app/services/api/group.service';
import { TestService } from 'src/app/services/api/test.service';
import { UserStoreService } from 'src/app/services/user-store.service';



@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  tests:Test[]=[];
  user:User|null = null;
  invalidDate = false;

  //edit and create 
  selectGroups = [{group_id: ''}]
  newTest: Test = {date: ''}
  editActive = {open: false, mode: ''}


  constructor(
    private testService: TestService,
    private userStoreService: UserStoreService,
    private notifications: ToastrService,
    private groupService: GroupService,
    private router: Router
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

  validate(){
    const date = this.newTest.date!.split("/")
    const dateCode = parseFloat(date.join(''))
    if(!dateCode || date[0].length !== 4 || date[1].length !== 2 || date[2].length !== 2){
      this.invalidDate = true
      return
    }else{
      this.invalidDate = false
      this.editActive.mode == 'Schedule test'? this.createTest() : this.updateTest()
    }
  }

  getAllTests(){
    this.testService.getTests(this.user!.group_id).subscribe(
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

  createTest(){
    this.testService.create(this.newTest).subscribe(
      success=>{
        this.getAllTests()
        this.notifications.success('Test successfully created')
        this.closeEditor()
      }
    )
  }

  openEditor(mode:string, info?:any){
    this.newTest.date = info.date 
    this.editActive.open = true
    this.editActive.mode = mode
    this.newTest.groupId = info.group_id || ''
    this.newTest.status = info.status || ''
    this.newTest.name = info.name || ''
    this.newTest.id = info.test_id 

    if(info.date !== ''){
      const date = new Date(Date.parse(info.scheduled)).toLocaleDateString().split('/')
      const dateFormat = [date[2], date[1], date[0]].join('/')
      this.newTest.date = dateFormat 
    }
  }

  closeEditor(){
    this.editActive.open = false
  }

  navigate(id:number){
    this.router.navigateByUrl(`result?testId=${id}`)
  }

}
