import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private adminEmail = 'admin@example.com'; // Adresse email de l'admin
  private adminPassword = 'password123'; // Mot de passe de l'admin

  private isAuthenticated = false;

  login(email: string, password: string): boolean {
    if (email === this.adminEmail && password === this.adminPassword) {
      this.isAuthenticated = true;
      localStorage.setItem('adminLoggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('adminLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('adminLoggedIn') === 'true';
  }
}
