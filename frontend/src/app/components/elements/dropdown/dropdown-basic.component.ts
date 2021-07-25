import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.component.html',
  styleUrls: ['./dropdown-basic.component.scss']
})
export class NgbdDropdownBasic {
  @Input() options: any;

  constructor(
    private router:Router,
    private notifications: ToastrService
    ){

  }

  navigate(id:number){
    const sure = confirm("End test with id " + id + " ?")
    if(sure){
      this.notifications.success('Test ended.')
      this.router.navigateByUrl('admin/create-results?testId=' + id)
    }
  }
}
