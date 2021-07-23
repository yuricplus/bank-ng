import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/users.service'

import { UserInterface } from '../shared/interface/user'
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../shared/services/payment.service'
import { TransactionPayload } from '../shared/interface/transactionPayload'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UserService implements OnInit {
  title = 'Desafio Picpay Front-end || Yuri Martins';

  public users: Array<UserInterface> = [];
  public modalOpened: boolean = false;
  public userToPay: UserInterface;
  public paymentComplete: boolean = false;
  public paymenteSuccess: boolean = false;

  constructor(
    private _http: HttpClient,
    public paymentService: PaymentService
  ){
    super(_http)
  }

  ngOnInit(): void {
    this.getUsers('/5d531c4f2e0000620081ddce')
      .subscribe(response => {
        this.users = response;
      })
  }

  openModal(userInfo) {
    this.modalOpened = true;
    this.userToPay = userInfo;
  }

  closeModal() {
    this.modalOpened = false;
    this.userToPay = null;
    this.paymentComplete = false;
  }

  seendPaymentToUser(body:TransactionPayload) {
    this.paymentComplete = false;
    this.paymentService.apiPayUser('/533cd5d7-63d3-4488-bf8d-4bb8c751c989', body)
      .subscribe(response => {
        this.paymentComplete = true;
        if(response.success) {
          this.paymenteSuccess = true;
        }
        if(!response.success) {
          this.paymenteSuccess = false;
        }
      })
  }
}
