import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../../interface/user'

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() user: UserInterface;

  constructor() { }

  ngOnInit(): void {}

}
