import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cambridge';
  navOpen = true

  setNavState($event:any){
    this.navOpen = $event
  }
}
