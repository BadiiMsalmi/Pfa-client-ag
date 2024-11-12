import { Component } from '@angular/core';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {Router} from '@angular/router';
import {AuthControllerService} from '../../services/services/auth-controller.service';
import {TokenService} from '../../token/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DividerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authRequest : AuthenticationRequest = {email :'',password :''};
  errorMsg : Array<string> = [];

  constructor(
    private router:Router,
    private authService :AuthControllerService,
    private tokenService : TokenService
  ) {
  }

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest,
    }).subscribe({
      next: (res) => {
        //todo save the token and check if the account if not locked
        this.tokenService.token = res.token as string
        console.log(res)
        this.router.navigate(['books']);
      },
      error: (err) => {
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        } else if(err.error.error){
          this.errorMsg.push(err.error.error);
        }else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }

  register() {
    this.router.navigate(['register'])
  }
}
