import { Component, OnInit } from '@angular/core';
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
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TableModule,
    MenuModule,
    InputTextModule,
    InputGroupModule,
    ButtonModule,
    FormsModule,
    BreadcrumbModule
  ],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  searchQuery: string = '';

  // Exemple de jobs avec des dates statiques ou dynamiques
  jobs = [
    { profession: 'Developer', company: 'Tech Corp', address: '123 Main St', candidate: 'John Doe', createdAt: new Date().toLocaleDateString() },
    { profession: 'Designer', company: 'Design Studio', address: '456 Elm St', candidate: 'Jane Smith', createdAt: new Date().toLocaleDateString() },
    { profession: 'Manager', company: 'Business Inc.', address: '789 Oak St', candidate: 'Bob Brown', createdAt: new Date().toLocaleDateString() },
    { profession: 'Engineer', company: 'Build Co.', address: '101 Pine St', candidate: 'Alice White', createdAt: new Date().toLocaleDateString() },
  ];

  filteredJobs = [...this.jobs]; 

  cards = [
    { title: 'Total Jobs', value: this.jobs.length, icon: 'pi pi-briefcase' },
    { title: 'Company Jobs', value: 52, icon: 'pi pi-building' },
    { title: 'Candidate Jobs', value: 100, icon: 'pi pi-users' },
  ];

  ngOnInit() {
    this.items = [{ label: 'Job Management' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  // Fonction de tri personnalisé
  customSort(event: SortEvent) {
    if (event.data && Array.isArray(event.data) && event.field) {
      const order = event.order ?? 1; // Si event.order est null ou undefined, utiliser 1 par défaut
  
      event.data.sort((data1, data2) => {
        const value1 = data1[event.field as keyof typeof data1]; // Accès sécurisé
        const value2 = data2[event.field as keyof typeof data2]; // Accès sécurisé
        let result = 0;
  
        if (value1 == null && value2 != null) {
          result = -1;
        } else if (value1 != null && value2 == null) {
          result = 1;
        } else if (value1 == null && value2 == null) {
          result = 0;
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
          result = value1.localeCompare(value2);
        } else {
          result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        }
  
        return order * result; // Appliquer l'ordre de tri
      });
    } else {
      console.warn('Impossible de trier : event.field ou event.data est invalide');
    }
  }

  // Fonction de recherche avec filtrage
  onSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredJobs = this.jobs.filter(
      job =>
        job.profession.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.address.toLowerCase().includes(query) ||
        job.candidate.toLowerCase().includes(query) ||
        job.createdAt.toLowerCase().includes(query)
    );
  }
}
