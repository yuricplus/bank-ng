import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { UserInterface } from '../../interface/user'

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() user: UserInterface;

  @Output() paymentUser: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  payUser(userInfo: any):void {
    this.paymentUser.emit(userInfo);
  }

}
