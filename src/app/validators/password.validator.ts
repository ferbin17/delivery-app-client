import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidator {
  static passwordMatchValidator(formGroup: FormGroup) {
    const values = formGroup.value;
    const control = formGroup.controls.confirm_password;
    const password: string = values.password; // get password from our password form control
    const confirmPassword: string = values.confirm_password; // get password from our confirmPassword form control
    if(password.length >= 8 && confirmPassword.length >= 8){
      // compare is the password math
      if (password !== confirmPassword) {
        // if they don't match, set an error in our confirmPassword form control
        control.setErrors({ NoPassswordMatch: true });
      }
    }
  }
}