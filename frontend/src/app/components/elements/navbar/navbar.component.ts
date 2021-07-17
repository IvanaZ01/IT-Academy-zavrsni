import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navOpen = true
  @Output() open = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  navToggle(){
    this.open.emit(this.navOpen)
  }
}
