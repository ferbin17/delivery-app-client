import { FormControl } from '@angular/forms';

export class EmailValidator {
  static validEmail(fc: FormControl){
    if(fc.value.toLowerCase() === "test@example.com"){
      return ({validEmail: true});
    } else {
      return (null);
    }
  }
}