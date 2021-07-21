import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cambridge';
  navOpen = false;
  destroy: any = true;

  setNavState($event: any) {
    if (!$event) {
      this.navOpen = $event;
      this.destroyIn200();
    }else{
      this.destroy = false
      setTimeout(()=>{
        this.navOpen = $event;
      },0)
    }
  }
  destroyIn200() {
    console.log('pozvano')
    setTimeout(() => {
      console.log('radi')
      this.destroy = true;
    }, 200);
  }
}
