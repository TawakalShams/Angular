import { Component, SecurityContext, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/authng.service';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { DomSanitizer } from '@angular/platform-browser';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styles: [
    `
  .alert-md-local {
    background-color: #009688;
    border-color: #00695C;
    color: #fff;
  }
  `
  ],
  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]
})
export class LoginComponent {
  
  
  submitted = false;
  returnUrl: string;
  error: {};
  loginError: boolean;
  Errorlogin:boolean;


  constructor(
   
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    sanitizer: DomSanitizer
   
   
  ){
    this.alertsHtml = this.alertsHtml.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));

   }

   alertsHtml: any = [
    {
      type: 'success',
      msg: `<strong>Well done!</strong> You successfully read this important alert message.`
    },
 
    {
      type: 'danger',
      msg: `<strong>Warning!</strong> Invalid username or Password!.`
    }
  ];

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      // Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      // Validators.minLength(8)
    ]),
});

  ngOnInit() {}

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    this.authService.login(this.username.value, this.password.value).subscribe((data) => {
       if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);
        } else {
         this.loginError = true;
     
        }
      },
      error => this.error = error
    );
   }
 
 
 }
