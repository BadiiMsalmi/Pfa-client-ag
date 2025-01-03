// src/app/pages/accueil/accueil.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { OffreEmploi } from '../../services/models/offre-emploi';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    MenubarModule,

    InputTextModule,
    DataViewModule,
    ButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  items: MenuItem[] | undefined;
  searchQuery: string = ''; // La requête de recherche
  currentSection: string = 'accueil'; // Section active par défaut


  jobs: OffreEmploi[] = [
  ];

  filteredJobs: OffreEmploi[] = this.jobs;

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        command: () => this.displaySection('accueil')
      },
      {
        label: 'Annonces',
        icon: 'pi pi-briefcase',
        command: () => this.displaySection('annonces')
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        command: () => this.displaySection('contact')
      }
    ];
  }

  // Fonction de gestion de la recherche
  onSearchChange() {

  }

  // Fonction pour changer la section affichée
  displaySection(section: string) {
    this.currentSection = section; // Change la section affichée
  }
}
