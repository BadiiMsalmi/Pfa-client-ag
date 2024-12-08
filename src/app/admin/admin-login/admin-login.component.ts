import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  standalone: true,
  imports: [
    FormsModule, // Ajoutez FormsModule ici
  ],
})
export class AdminLoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/dashboard']); // Rediriger après connexion
    } else {
      this.errorMessage = 'Adresse email ou mot de passe incorrect';
    }
  }
}
