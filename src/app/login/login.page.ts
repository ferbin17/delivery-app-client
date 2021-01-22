import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
   	    email: new FormControl('', Validators.compose([
   		     Validators.required,
   		     Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$')
   	     ])),
         password: new FormControl('', Validators.compose([
           Validators.required,
           Validators.minLength(8)
        ]))
    });
  }

  ngOnInit() {
  }
  
  public onSubmit() {
    console.log(this.loginForm.value)
  }

}
