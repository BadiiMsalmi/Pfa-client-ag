import { Component, OnInit } from '@angular/core';
import { AdministrateurControllerService } from '../../services/services/administrateur-controller.service';
import { CompetenceDto } from '../../services/models/competence-dto';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import { Competence } from '../../services/models/competence';
import { ProfilControllerService } from '../../services/services/profil-controller.service';  // Import ProfilControllerService
import { ProfilRecruteurDto } from '../../services/models/profil-recruteur-dto';
import {ActivatedRoute, Router} from '@angular/router';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {ButtonDirective} from 'primeng/button';
@Component({
  selector: 'app-complete-profile',
  standalone: true,
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css'],
  imports: [
    FormsModule,
    NgForOf,
    StepsModule,
    NgIf,
    ButtonDirective

  ]
})
export class CompleteProfileComponent implements OnInit {
  user = { email: '', entreprise: '', experiences: 0,bio:'', selectedCompetences: [] };
  competences: Competence[] = [];
  newCompetenceName = '';
  isRecruiter = false;
  receivedValue: string | null = null;

  activeIndex = 0;
  steps: MenuItem[] = [];
  step1Form: FormGroup;
  step2Form: FormGroup;

  constructor(
    private administrateurService: AdministrateurControllerService,
    private profilControllerService: ProfilControllerService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {

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
      { label: 'Remplir les informations' },
      { label: 'Confirmation' },
    ];
  }

  ngOnInit(): void {
    this.fetchCompetences();
    this.route.queryParamMap.subscribe((params) => {
      this.receivedValue = params.get('role');
      console.log('Received Value:', this.receivedValue);
    });

    this.isRecruiter = this.receivedValue == 'ROLE_RECRUTEUR';
  }

  fetchCompetences(): void {
    this.administrateurService.getAllCompetences().subscribe({
      next: (competences: any) => {
        this.competences = competences;
        console.log('Competences fetched:', competences);
      },
      error: (err: any) => {
        this.handleErrors(err);
      },
    });
  }

  addCompetence(): void {
    if (this.newCompetenceName.trim()) {
      const newCompetence: CompetenceDto = {
        name: this.newCompetenceName.trim(),
      };

      this.administrateurService
        .addNewCompetence({ body: newCompetence })
        .subscribe({
          next: (createdCompetence: CompetenceDto) => {
            this.competences.push(createdCompetence);
            console.log('Competence added:', createdCompetence);
            this.newCompetenceName = '';
          },
          error: (err: any) => {
            console.error('Error adding competence:', err);
          },
        });
    }
  }


  onSubmit(): void {


    // For Candidate
    if (!this.isRecruiter) {
      const profileData = {
        email: this.user.email,
        experiences: this.user.experiences,
        competences: this.user.selectedCompetences,
        bio: this.user.bio
      };

      console.log('Form Submitted:', profileData);
      const body = JSON.stringify(profileData);

      this.profilControllerService
        .completeProfileCandidat({ body })
        .subscribe({
          next: () => {
            console.log('Candidate profile completed');
            this.router.navigate(['acceuil-client'])
          },
          error: (err) => {
            console.error('Error completing candidate profile:', err);
          },
        });
    } else {
      const recruteurProfile: ProfilRecruteurDto = {
        email: this.user.email,
        entreprise: this.user.entreprise,
        bio: this.user.bio
      };

      this.profilControllerService
        .completeProfileRecruteur({ body: recruteurProfile })
        .subscribe({
          next: () => {
            this.router.navigate(['acceuil-client'])
            console.log('Recruiter profile completed');
          },
          error: (err) => {
            console.error('Error completing recruiter profile:', err);
          },
        });
    }
  }

  private handleErrors(error: any): void {
    console.error('Error:', error);
    // Implement additional error handling logic as needed
  }
}
