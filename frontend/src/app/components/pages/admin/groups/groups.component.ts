import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Group } from 'src/app/models/Groups.model';
import { Teacher } from 'src/app/models/Teacher.model';
import { GroupService } from 'src/app/services/api/group.service';
import { TeacherService } from 'src/app/services/api/teacher.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups:Group[] = [];
  selectTeachers:Teacher[] = [];

  //edit and create 
  newGroup: Group = {};
  editActive = {open: false, mode: ''}


  constructor(
    private notifications: ToastrService,
    private groupService: GroupService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.getAllGroups()

    this.teacherService.getAll().subscribe(
      success => {
        this.selectTeachers = success
      }
    )
  }

  getAllGroups(){
    this.groupService.getAll().subscribe(
      success=>{
        this.groups = success
      }
    )
  }

  deleteGroup(id:number){
    const sure = confirm('Are you sure you want to delete group with id ' + id)
    if(sure){
      this.groupService.delete(id).subscribe(
        success=>{
          this.getAllGroups()
          this.notifications.success("Group deleted.")
        }
      )
    }
  }

  updateGroup(){
    this.groupService.update(this.newGroup).subscribe(
      success=>{
        this.getAllGroups()
        this.notifications.success('Group successfully updated.')
        this.closeEditor()
      }
    )
  }

  createGroup(){
    this.groupService.create(this.newGroup).subscribe(
      () =>{
        this.getAllGroups()
        this.notifications.success('User successfully added.')
        this.closeEditor()
      }
    )
  }

  openEditor(mode:string, info?:any){  
    this.editActive.open = true
    this.editActive.mode = mode

    this.newGroup.teacherId = info.teacher_id || ''
    this.newGroup.level = info.level || ''
    this.newGroup.id = info.group_id || ''

  }

  closeEditor(){
    this.editActive.open = false
  }

}
