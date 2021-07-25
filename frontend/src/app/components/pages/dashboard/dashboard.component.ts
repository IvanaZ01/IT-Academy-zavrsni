import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:User|null = {};

  constructor(private userStoreService: UserStoreService) { }

  ngOnInit(): void {
    this.userStoreService.user.subscribe(
      user=>{
        if(user){
          this.user = user
        }else{
          user = null
        }
      }
    )
  }

}
