import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardUserComponent } from './card-user/card-user.component';
import { ModalComponent } from './modal/modal.component'

const declarations = [
  CardUserComponent,
  ModalComponent
]

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule
  ],
  exports: declarations,
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComponentModule { }