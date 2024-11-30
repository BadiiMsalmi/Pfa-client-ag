import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterModule, CommonModule, ButtonModule, SidebarModule],
  standalone: true,
})
export class LayoutComponent {

  isLeftSidebarCollapsed: boolean = false;
  items = [
    { label: 'Dashboard', routeLink: '/dashboard', icon: 'pi pi-chart-line' },
    { label: 'Users List', routeLink: '/user', icon: 'pi pi-user' },
    { label: 'Jobs List', routeLink: '/jobs', icon: 'pi pi-list' },
    { label: 'Contacts List', routeLink: '/contacts', icon: 'pi pi-envelope' }
  ];

  toggleCollapse(): void {
    this.isLeftSidebarCollapsed = !this.isLeftSidebarCollapsed;
  }
}
