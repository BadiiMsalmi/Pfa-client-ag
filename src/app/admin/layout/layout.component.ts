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
    { label: 'User Manager', route: '/gestion-users', icon: 'pi pi-users' },
    { label: 'Job Manager', route: '/gestion-jobs', icon: 'pi pi-briefcase' },
    { label: 'Contact Manager', route: '/gestion-contacts', icon: 'pi pi-envelope'    },
    { label: 'Recommandation ', route: '/gestion-annonces', icon: 'pi pi-thumbs-up'    },


  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Inverse l'état d'ouverture
  }
}