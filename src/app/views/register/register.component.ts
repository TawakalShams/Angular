import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor() { }
  form =new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
})

get username(){
  return this.form.get('username');
};
get email(){
  return this.form.get('email');
};

get password(){
  return this.form.get('password');
};
get repassword(){
  return this.form.get('repassword');
};
}
