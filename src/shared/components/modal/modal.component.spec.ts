import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ModalComponent } from './modal.component';
import { CardUserComponent } from '../card-user/card-user.component';

const mockUser = {
  id: 1001,
  img: "https://randomuser.me/api/portraits/men/9.jpg",
  name: "Eduardo Santos",
  username: "@eduardo.santos",
}

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      imports: [
        FormsModule,
        NgxMaskModule.forRoot(),
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.modalOpened = true;
    component.userToPay = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render modal info payment success', ()=> {
    const fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.modalOpened = true;
    component.paymentComplete = true;
    component.paymentSuccess = true;
    component.userToPay = mockUser;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.modal-information .payment-success')
      .textContent).toContain('O pagamento foi concluido com sucesso');
  })

  it('should render modal info payment error', ()=> {
    const fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.modalOpened = true;
    component.paymentComplete = true;
    component.paymentSuccess = false;
    component.userToPay = mockUser;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.modal-information .payment-error')
      .textContent).toContain('O pagamento não foi concluido com sucesso.');
  })

  it('should render user to pay', ()=> {
    const fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    component.modalOpened = true;
    component.userToPay = mockUser;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span.name-user').textContent).toContain('Eduardo Santos');
  })
});
