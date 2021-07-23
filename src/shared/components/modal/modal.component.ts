import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationUtil } from '../../Utils/validator.util'
import { UserInterface } from '../../../shared/interface/user'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalOpened = false;
  @Input() userToPay:UserInterface;
  @Input() paymentComplete: boolean;
  @Input() paymentSuccess: boolean;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() payUser: EventEmitter<void> = new EventEmitter<void>();
  public cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  public form = new FormGroup({
    payment: new FormControl('', 
      Validators.compose([Validators.required, ValidationUtil.diferentThanzero(),]
    )),
    card: new FormControl(this.cards[0])
  });

  constructor() { }

  get paymentValue(){
    return this.form.get('payment');
  }

  getLastChar(info: string):string {
    return info.slice(info.length - 4)
  }

  sendPayment(){
    const { card_number, cvv, expiry_date } = this.form.controls.card.value;
    const dataUser:any = {
      card_number,
      cvv,
      expiry_date,
      value: this.paymentValue.value,
      destination_user_id: this.userToPay.id
    }
    this.payUser.emit(dataUser)
  }

  ngOnInit(): void {}

  closeModalEvent(){
    this.closeModal.emit();
  }

}
