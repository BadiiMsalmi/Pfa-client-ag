import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { AuthControllerService } from '../../services/services/auth-controller.service';
import { TokenService } from '../../token/token.service';
import { RegisterRequest } from '../../services/models/register-request';
import { AuthenticationRequest } from '../../services/models/authentication-request';
import { HttpClientModule } from '@angular/common/http';
import {AuthenticationResponse} from '../../services/models/authentication-response';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,  // Add this import
    HttpClientModule,  // Add this import
    ButtonDirective,
    Ripple,
    InputTextModule,
    FormsModule,
    RadioButtonModule,
    InputIconModule,
    ButtonModule,
    IconFieldModule,
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showLoginForm = false;
  showRegisterForm = false;
  firstname?: string;
  lastname?: string;
  accountname? :string;
  email?: string;
  password?: string;
  role?: string;

  authRequest: AuthenticationRequest = { email: '', password: '' };
  registerRequest: RegisterRequest = {
    email: '',
    firstname: '',
    lastname: '',
    accountname: '',
    password: '',
    role: ''
  };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthControllerService,
    private tokenService: TokenService
  ) {}

  // Navigate to the register form
  goToRegister() {
    this.showLoginForm = false;
    this.showRegisterForm = true;
  }

  // Navigate to the login form
  goToLogin() {
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  // Login method
  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest,
    }).subscribe({
      next: (res : AuthenticationResponse) => {
        console.log(res)
        console.log(res.message == "Profile not completed")
        if (res.message == "Profile not completed"){
          this.tokenService.token = res.token as string
          this.router.navigate(['completeProfile'], { queryParams: { email: this.authRequest.email }})
        }else {
          this.tokenService.token = res.token as string
          console.log(res)
          this.router.navigate(['acceuil-client']);
        }
      },
      error: (err) => {
        this.handleErrors(err);
      }
    });
  }


  // Register method
  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string
        this.router.navigate(['completeProfile'], { queryParams: { email: this.registerRequest.email,role: this.registerRequest.role } });
      },
      error: (err) => {
        this.handleErrors(err);
      }
    });
  }

  // General error handling method
  private handleErrors(err: any) {
    if (err.error.validationErrors) {
      this.errorMsg = err.error.validationErrors;
    } else if (err.error.error) {
      this.errorMsg.push(err.error.error);
    } else {
      this.errorMsg.push(err.error.errorMsg);
    }
  }
}
