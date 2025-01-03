import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { FileUploadModule } from 'primeng/fileupload';
import { routes } from '../../app.routes';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-annonce-list',
  standalone: true,
  imports: [
      ReactiveFormsModule,  
      FileUploadModule,
      StepsModule,
      FormsModule,
      CommonModule,
      DataViewModule,
      TagModule,
      ButtonModule,
      DialogModule
  ],
  templateUrl: './annonce-list.component.html',
  styleUrl: './annonce-list.component.css'
})
export class AnnonceListComponent {
  searchQuery = ''; // Recherche
  jobs = [ // Liste des jobs
      {
          id: 1,
          title: 'Software Engineer',
          company: 'TechCorp',
          image: 'https://via.placeholder.com/64',
          salary: '2500 - 3500 DT',
      },
      {
          id: 2,
          title: 'Product Manager',
          company: 'Innovate Inc.',
          image: 'https://via.placeholder.com/64',
          salary: '2500 - 4000 DT',
      },
      {
          id: 3,
          title: 'UX Designer',
          company: 'Creative Minds',
          image: 'https://via.placeholder.com/64',
          salary: '1500 - 2500 DT',
      },
      {
          id: 4,
          title: 'Data Scientist',
          company: 'Data Solutions',
          image: 'https://via.placeholder.com/64',
          salary: '2000 - 3500 DT',
      },
  ];

  // Méthode pour filtrer les jobs par titre ou entreprise
  filteredJobs() {
      return this.jobs.filter(
          (job) =>
              job.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
              job.company.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
  }
}