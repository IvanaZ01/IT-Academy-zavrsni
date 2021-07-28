import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navOpen = false
  @Output() toggle = new EventEmitter();
  user:any = null;

  constructor(
    private router: Router, 
    private userStoreService: UserStoreService, 
    private notifications: ToastrService,
    ) {
  }
  
  ngOnInit(): void {
    this.userStoreService.user.subscribe(user => {
      if (user != null) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  navToggle(){
    this.navOpen = !this.navOpen
    this.toggle.emit(this.navOpen)
  }

  navigate(link:string){
    this.router.navigateByUrl(link)
  }

  logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
  
      this.userStoreService.updateUser(null);
      this.notifications.success('You have successfully logged out.');
  }

}
