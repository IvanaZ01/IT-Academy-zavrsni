import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Group } from 'src/app/models/Groups.model';
import { User } from 'src/app/models/User.model';
import { GroupService } from 'src/app/services/api/group.service';
import { UserService } from 'src/app/services/api/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[] = [];
  selectGroups:Group[] = [];

  //edit and create 
  newUser: User = {};
  editActive = {open: false, mode: ''}


  constructor(
    private userService: UserService,
    private notifications: ToastrService,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.getAllUsers()

    this.groupService.getAll().subscribe(
      success=>{
        this.selectGroups = success
      }
    )
  }

  getAllUsers(){
    this.userService.getAll().subscribe(
      success=>{
        this.users = success
      }
    )
  }

  deleteUser(id:number){
    const sure = confirm('Are you sure you want to delete user with id ' + id)
    if(sure){
      this.userService.delete(id).subscribe(
        success=>{
          this.getAllUsers()
          this.notifications.success("User deleted")
        }
      )
    }
  }

  updateUser(){
    this.userService.update(this.newUser).subscribe(
      success=>{
        this.getAllUsers()
        this.notifications.success('User successfully updated')
        this.closeEditor()
      }
    )
  }

  addUser(){
    this.userService.create(this.newUser).subscribe(
      () =>{
        this.getAllUsers()
        this.notifications.success('User successfully added')
        this.closeEditor()
      }
    )
  }

  openEditor(mode:string, info?:any){  
    this.editActive.open = true
    this.editActive.mode = mode

    this.newUser.firstName = info.first_name || ''
    this.newUser.lastName = info.last_name || ''
    this.newUser.username = info.username || ''
    this.newUser.role = info.role || ''
    this.newUser.groupId = info.group_id || null
    this.newUser.id = info.user_id || ''
    this.newUser.password = info.password|| ''

  }

  closeEditor(){
    this.editActive.open = false
  }

}
