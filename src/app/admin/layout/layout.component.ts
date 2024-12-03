import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterModule, CommonModule, ButtonModule, SidebarModule,],
  standalone: true,
})
export class LayoutComponent {
  isSidebarOpen = true; // Sidebar ouverte par défaut

  sidebarItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'pi pi-home' },
    { label: 'Gestion Utilisateurs', route: '/gestion-users', icon: 'pi pi-users' },
    { label: 'Gestion Annonces', route: '/gestion-annonces', icon: 'pi pi-briefcase' },
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Inverse l'état d'ouverture
  }
}