import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/users.service'

import { UserInterface } from '../shared/interface/user'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UserService implements OnInit {
  title = 'Desafio Picpay Front-end || Yuri Martins';
  public users: Array<UserInterface> = []

  constructor(
    private _http: HttpClient,
  ){
    super(_http)
  }

  ngOnInit(): void {
    this.getUsers('/5d531c4f2e0000620081ddce')
      .subscribe(response => {
        this.users = response;
      })
  }
}
