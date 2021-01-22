import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from './../validators/email.validator';
import { PasswordValidator } from './../validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
   	    email: new FormControl('', Validators.compose([
           EmailValidator.validEmail,
   		     Validators.required,
   		     Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$')
   	     ])),
         password: new FormControl('', Validators.compose([
           Validators.required,
           Validators.minLength(8)
        ])),
        confirm_password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8)
       ]))
    }, {
        validator: PasswordValidator.passwordMatchValidator
    });
  }

  ngOnInit() {
  }
  
  public onSubmit() {
    console.log(this.signupForm.value)
  }

  validation_messages = {
    'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'Invalid email' },
        { type: 'validEmail', message: 'Email already taken.' }
     ],
     'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 8 characters long.' },
     ],
     'confirm_password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 8 characters long.' },
        { type: 'NoPassswordMatch', message: 'Password doesn\'t match' }	   
     ],
  }
}
