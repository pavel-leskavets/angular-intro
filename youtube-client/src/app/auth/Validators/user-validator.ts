import {AbstractControl, ValidatorFn} from '@angular/forms';

export class UserValidator {

  public static checkUserInfo(control: AbstractControl, inputValue: string): ValidatorFn {
    if (control.value && control.value !== inputValue) {
      control.setErrors({dataNotMatch: true});
    } else {
      return null;
    }
  }
}
