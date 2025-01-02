import { Component } from '@angular/core';
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
  selector: 'app-edit-profil',
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
  templateUrl: './edit-profil.component.html',
  styleUrl: './edit-profil.component.css'
})
export class EditProfilComponent {
 activeIndex = 0;
  steps: MenuItem[] = [];
  step1Form: FormGroup;
  step2Form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Formulaire pour l'étape 1 : Nom et pays
    this.step1Form = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
    });

    // Formulaire pour l'étape 2 : Description
    this.step2Form = this.fb.group({
      description: ['', Validators.required],
    });

    // Définition des étapes pour le Stepper
    this.steps = [
      { label: 'Informations de base' },
      { label: 'Motivation et profession' },
      { label: 'Téléchargement du CV' },
      { label: 'Confirmation' },
    ];
  }

  // Passer à l'étape suivante
  nextStep() {
    if (this.activeIndex < this.steps.length - 1) {
      this.activeIndex++;
    }
  }

  // Retourner à l'étape précédente
  prevStep() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  // Gérer le téléchargement du CV
  onUpload(event: any) {
    console.log('Fichier téléchargé :', event);
  }

  // Soumettre le formulaire
  submit() {
    console.log('Formulaire soumis avec succès !');
  }
}