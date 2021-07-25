import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.component.html',
  styleUrls: ['./dropdown-basic.component.scss']
})
export class NgbdDropdownBasic {
  @Input() options: any;

  constructor(
    private router:Router
    ){

  }

  navigate(id:number){
    const sure = confirm("End test with id " + id + " ?")
      this.router.navigateByUrl('admin/create-results?testId=' + id)
  }
}
