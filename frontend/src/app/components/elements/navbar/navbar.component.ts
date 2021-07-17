import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navOpen = true
  @Output() open = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navToggle(){
    this.open.emit(this.navOpen)
  }

  navigate(link:string){
    this.router.navigateByUrl(link)
  }
}
