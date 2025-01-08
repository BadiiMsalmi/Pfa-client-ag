import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { MenuItem, SelectItem } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';  // Module pour FileUpload
import { StepsModule } from 'primeng/steps'; 
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';
@Component({
  selector: 'app-createannonce',
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
    StepsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    FileUploadModule,
    RadioButtonModule,
    
  ],  templateUrl: './createannonce.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './createannonce.component.css'
})
export class CreateannonceComponent {
  
  jobForm!: FormGroup; // Le '!' indique que jobForm sera initialisé dans ngOnInit
  companyImage: string | ArrayBuffer | null = null;

  // Options de types de contrat
  contractTypes: SelectItem[] = [
    { label: 'CDI', value: 'CDI' },
    { label: 'CDD', value: 'CDD' },
    { label: 'Freelance', value: 'Freelance' },
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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.jobForm = this.fb.group({
      companyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      contractType: ['', Validators.required],
      experienceDuration: ['', [Validators.required, Validators.min(0)]],
      skills: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(1)]],
    });
      // Charger les notifications au démarrage
      this.notifications = this.notificationData.map(notification => ({
        ...notification,
        date: this.formatDate(notification.date) // Formater la date de la notification
      }));
  
      // Calculer le nombre de notifications non lues
      this.unreadCount = this.notifications.filter(notification => !notification.read).length;
  }

  // Méthode pour gérer l'image de la société
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.companyImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Méthode de soumission du formulaire
  onSubmit() {
    if (this.jobForm.valid) {
      const jobData = this.jobForm.value;
      console.log('Annonce de travail créée :', jobData);
      // Vous pouvez ici envoyer les données vers le backend via un service.
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }
}