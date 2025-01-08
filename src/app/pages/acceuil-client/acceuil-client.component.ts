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
  notifications: any[] = []; // Liste des notifications
  showNotifications: boolean = false; // Etat pour afficher ou cacher les notifications
  unreadCount: number = 0; // Nombre de notifications non lues

  // Liste de notifications avec texte, icône et date
  notificationData = [
    { text: "Nouvelle commande reçue", icon: "pi pi-exclamation-circle", date: new Date() },
    { text: "Message de l'utilisateur", icon: "pi pi-exclamation-circle", date: new Date() },
    { text: "Mise à jour de l'inventaire", icon: "pi pi-exclamation-circle", date: new Date() },
    
  ];

  ngOnInit() {
    // Charger les notifications au démarrage
    this.notifications = this.notificationData.map(notification => ({
      ...notification,
      date: this.formatDate(notification.date) // Formater la date de la notification
    }));

    // Calculer le nombre de notifications non lues
    this.unreadCount = this.notifications.filter(notification => !notification.read).length;
  }

  // Fonction pour basculer l'affichage des notifications
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  // Fonction pour marquer une notification comme lue
  markAsRead(notification: any) {
    notification.read = true;
    this.unreadCount = this.notifications.filter(notification => !notification.read).length; // Recalculer le nombre de non lues
  }
  
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return date.toLocaleDateString('fr-FR', options);
  }
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

}
