import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { MenuItem } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';  // Module pour FileUpload
import { StepsModule } from 'primeng/steps'; 
@Component({
  selector: 'app-contact-client',
  standalone: true,
 imports: [
    FormsModule,
    CommonModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,  
    FileUploadModule,
    StepsModule
  ],
  templateUrl: './contact-client.component.html',
  styleUrl: './contact-client.component.css'
})
export class ContactClientComponent implements OnInit{
  focus: any;
  focus1: any;

  contact = {
    name: '',
    email: '',
    message: ''
  };

  successMessage = ''; // Propriété pour le message de succès
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


  // Fonction pour soumettre le formulaire
  onSubmit() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    savedContacts.push({ ...this.contact, createdAt: new Date().toLocaleDateString() });
    localStorage.setItem('contacts', JSON.stringify(savedContacts));

    // Afficher le message de succès
    this.successMessage = 'Votre Contact ajouté avec succès !';
    
    // Réinitialiser le formulaire
    this.contact = { name: '', email: '', message: '' };

    // Masquer le message après 5 secondes
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
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
}
