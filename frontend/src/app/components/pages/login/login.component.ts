import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/api/user.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any = {}
  constructor(
    private userService: UserService,
    private notification: ToastrService,
    private userStoreService: UserStoreService,
    private router: Router
     ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.login(this.user).subscribe(
      (success:any)=>{
        this.notification.success('You have successfully logged in.')
        localStorage.setItem('token', success.token)
        localStorage.setItem('user', JSON.stringify(success.user))
        this.userStoreService.updateUser(success.user);
        this.router.navigateByUrl('/home')
      },
      err =>{
        this.notification.error(err.error.msg)
      }
    )
  }
}
