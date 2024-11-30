import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { LayoutComponent } from './admin/layout/layout.component'; // Ensure LayoutComponent is also imported here
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent, // Import your LayoutComponent
    SidebarModule,
    ButtonModule,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pfa-client-Ag';
  
}
