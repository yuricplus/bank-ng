import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class ValidationUtil {

  static errorMessage = {
    isNumber: () => 'O valor precisa ser numerico',
    diferentThanzero: () => 'Precisa ser um valor valido'
  }

  static getError(errorName: string, controlNames?: string | string[]):ValidationErrors {
    const error = {};
    const errorMessage = ValidationUtil.errorMessage[errorName](controlNames);
    error[errorName] = errorMessage;
    return error;
  }

  static isNumber(error?: ValidationErrors): ValidatorFn {
    error = error || ValidationUtil.getError('isNumber');
    return (control: AbstractControl): ValidationErrors => isNaN(+control.value) ? null : error;
  }

  static diferentThanzero(error?: ValidationErrors):ValidatorFn {
    error = error || ValidationUtil.getError('diferentThanzero');
    return (control: AbstractControl): ValidationErrors => +control.value !== 0 ? null : error;
  }
}