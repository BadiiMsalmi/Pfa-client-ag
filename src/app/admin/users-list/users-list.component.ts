import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-users-list',
  standalone: true,

  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  imports:[ CardModule,  // Ajoutez ici
    TableModule, // Ajoutez ici
    CommonModule,
    RouterModule,
    TagModule,         // Tag module for p-tag
    InputTextModule,   // InputText for pInputText
    CommonModule,
       // InputText for pInputText
     ]
})
export class UsersListComponent {
  users = [
    { name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive' },
    { name: 'Michael Brown', email: 'michael.brown@example.com', status: 'Active' },
  ];

  selectedUser: any;  // Store selected user

  // Function to get severity class for status
  getSeverity(status: string): string {
    switch (status) {
      case 'Active':
        return 'success'; // Green
      case 'Inactive':
        return 'danger'; // Red
      default:
        return 'warning'; // Yellow
    }
  }

  cards = [
    { title: 'Total Users', value: this.users.length, icon: 'pi pi-users' },
    { title: 'Active Users', value: this.users.filter(u => u.status === 'Active').length, icon: 'pi pi-check-circle' },
    { title: 'Inactive Users', value: this.users.filter(u => u.status === 'Inactive').length, icon: 'pi pi-times-circle' },
  ];
}
