import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/services/api/teacher.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers:any;
  user:any;

  //edit and create 
  newTeacher: any = {};
  editActive = {open: false, mode: ''}


  constructor(
    private teacherService: TeacherService,
    private userStoreService: UserStoreService,
    private notifications: ToastrService
  ) {}

  ngOnInit(): void {
    this.userStoreService.user.subscribe(user => {
      if (user != null) {
        this.user = user;
      } else {
        this.user = null;
      }
    });

    this.getAllTeachers()
  }

  getAllTeachers(){
    this.teacherService.getAll().subscribe(
      success=>{
        this.teachers = success
      }
    )
  }

  deleteTeacher(id:number){
    const sure = confirm('Are you sure you want to delete teacher with id ' + id)
    if(sure){
      this.teacherService.delete(id).subscribe(
        success=>{
          this.getAllTeachers()
          this.notifications.success("Teacher deleted")
        }
      )
    }
  }

  updateTeacher(){
    this.teacherService.update(this.newTeacher).subscribe(
      success=>{
        this.getAllTeachers()
        this.notifications.success('Teacher successfully updated')
        this.closeEditor()
      }
    )
  }

  addTeacher(){
    this.teacherService.create(this.newTeacher).subscribe(
      success=>{
        this.getAllTeachers()
        this.notifications.success('Teacher successfully added')
        this.closeEditor()
      }
    )
  }

  openEditor(mode:string, info?:any){
    this.editActive.open = true
    this.editActive.mode = mode

    console.log(info)
    this.newTeacher.firstName = info.first_name || ''
    this.newTeacher.lastName = info.last_name || ''
    this.newTeacher.id = info.teacher_id || ''

    console.log(this.newTeacher)
  }

  closeEditor(){
    this.editActive.open = false
  }



}
