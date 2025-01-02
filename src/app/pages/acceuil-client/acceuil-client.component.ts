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

@Component({
  selector: 'app-acceuil-client',
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
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.css']
})
export class AcceuilClientComponent implements OnInit {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
  focus: any;
  focus1: any;
  layout: 'list' | 'grid' = 'list';

  jobs = [
    {
      id: '1',
      title: 'Développeur Web Front-End',
      company: 'Tech Innovators',
      location: 'Tunis, Tunisie',
      salary: '2500 TND / mois',
      rating: 4.5,
      jobType: 'CDI',
      image: 'company1.jpg',
      status: 'ACTIVE',
    },
    {
      id: '2',
      title: 'Chef de Projet IT',
      company: 'Solutions Pro',
      location: 'Sfax, Tunisie',
      salary: '4000 TND / mois',
      rating: 4.3,
      jobType: 'CDD',
      image: 'company2.jpg',
      status: 'ACTIVE',
    },
    {
      id: '3',
      title: 'Consultant en Data Science',
      company: 'Data Experts',
      location: 'En télétravail',
      salary: '3500 TND / mois',
      rating: 4.7,
      jobType: 'CDI',
      image: 'company3.jpg',
      status: 'ACTIVE',
    },
    {
      id: '4',
      title: 'Responsable Marketing',
      company: 'Creative Minds',
      location: 'Tunis, Tunisie',
      salary: '3000 TND / mois',
      rating: 4.0,
      jobType: 'CDI',
      image: 'company4.jpg',
      status: 'INACTIVE',
    },
  ];

  onLayoutChange(event: 'list' | 'grid') {
    this.layout = event;
  }

  getSeverity(job: any): 'success' | 'warning' | 'danger' | undefined {
    switch (job.status) {
      case 'ACTIVE':
        return 'success';
      case 'INACTIVE':
        return 'danger';
      default:
        return undefined;
    }
  }

  ngOnInit() {}
}
