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

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
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
  email?: string;
  password?: string;
  role: string = 'ROLE_CANDIDAT';

  authRequest: AuthenticationRequest = { email: '', password: '' };
  registerRequest: RegisterRequest = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    role: 'ROLE_CANDIDAT'
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
      next: (res) => {
        this.tokenService.token = res.token as string;
        console.log(res);
        this.router.navigate(['books']);
      },
      error: (err) => {
        this.handleErrors(err);
      }
    });
  }

  // Register method
  register() {
    this.errorMsg = [];

    // Validate password before proceeding
    if (!this.validatePassword(this.registerRequest.password)) {
      this.errorMsg.push("Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.");
      return; // Stop further processing if password is invalid
    }

    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['completeProfile'], { queryParams: { email: this.registerRequest.email } });
      },
      error: (err) => {
        this.handleErrors(err);
      }
    });
  }

  // Password validation logic
  private validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
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
