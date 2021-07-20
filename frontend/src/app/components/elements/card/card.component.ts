import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  user:any;
  @Input() data:any;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() scroll = new EventEmitter();

  constructor(
    private userStoreService: UserStoreService
  ) { }

  ngOnInit(): void {
    this.userStoreService.user.subscribe((user) => {
      if (user != null) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  sendEdit(){
    this.edit.emit(this.data)
    this.scroll.emit()
  }

  sendDelete(){
    this.delete.emit(this.data.article_id)
  }

}
