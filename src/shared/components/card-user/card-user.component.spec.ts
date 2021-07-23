import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardUserComponent } from './card-user.component';

const mockUser = {
  id: 1001,
  img: "https://randomuser.me/api/portraits/men/9.jpg",
  name: "Eduardo Santos",
  username: "@eduardo.santos",
}

describe('CardUserComponent', () => {
  let component: CardUserComponent;
  let fixture: ComponentFixture<CardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CardUserComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render id and username', () => {
    const fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.user-id-username')
      .textContent).toContain('ID: 1001 - Username: @eduardo.santos');
  });

  it('should render name', () => {
    const fixture = TestBed.createComponent(CardUserComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.user-name')
      .textContent).toContain('duardo Santos');
  });
});
