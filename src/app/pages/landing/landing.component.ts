import { Component } from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    ButtonDirective,
    Ripple
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  constructor(
    private router:Router
  ) {
  }

  goToRegister() {
    this.router.navigate(['register'])
  }

  goToLogin() {
    this.router.navigate(['login'])
  }
}
