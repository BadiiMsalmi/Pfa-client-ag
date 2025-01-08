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
import {AuthControllerService} from '../../services/services/auth-controller.service';
import {Router} from '@angular/router';
import {NavbarHeaderComponent} from '../navbar-header/navbar-header.component';
import {FooterComponent} from '../footer/footer.component';
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
    StepsModule,
    NavbarHeaderComponent,
    FooterComponent
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

  constructor(
    private authService: AuthControllerService,
    private router : Router
  ) {
  }
  ngOnInit() {}

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

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/acceuil']);
      },
      error: (err) => {
        console.error('Error during logout:', err);
      },
    });
  }

}
