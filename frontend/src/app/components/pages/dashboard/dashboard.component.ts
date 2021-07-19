import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user:any;

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
