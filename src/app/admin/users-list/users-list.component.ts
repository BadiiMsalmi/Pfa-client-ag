import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { SortEvent } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  standalone: true,

  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  imports:[ 
    CommonModule,
    RouterModule,
    CardModule,
    TableModule,
    MenuModule,
    InputTextModule,
    InputGroupModule,
    ButtonModule,
    FormsModule 
     ]
})
export class UsersListComponent {
  searchQuery: string = ''; 

  users = [
    { firstName: 'Ranya', lastName: 'Jamel', accountName: 'Ran123', email: 'ranjm@gmail.com' },
    { firstName: 'Oumayma', lastName: 'Hammemi', accountName: 'Ouma12', email: 'ouma12@gmail.com' },
    { firstName: 'Badiaa', lastName: 'Msalmi', accountName: 'Badiaa12', email: 'badiaa1@gmail.com' },
  ];

  cards = [
    { title: 'Total user', value: this.users.length, icon: 'pi pi-users' },
    { title: 'Total recruiters', value: this.users.length, icon: 'pi pi-check-circle' },
    { title: 'Total candidates', value: this.users.length, icon: 'pi pi-times-circle' },
  ];
  customSort(event: SortEvent) {
    if (event.data && Array.isArray(event.data) && event.field) {
        const order = event.order ?? 1; 
  
        event.data.sort((data1, data2) => {
            if (event.field) {
                let value1 = data1[event.field];
                let value2 = data2[event.field];
                let result = null;
  
                if (value1 == null && value2 != null) result = -1;
                else if (value1 != null && value2 == null) result = 1;
                else if (value1 == null && value2 == null) result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
                else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
  
                return order * result; 
            }
            return 0; 
        });
    } else {
        console.warn('Aucune donnée à trier ou event.field est undefined');
    }
  }
  filteredUsers = [...this.users]; 

  onSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredUsers = this.users.filter(
      user =>
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query) ||
        user.accountName.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }}