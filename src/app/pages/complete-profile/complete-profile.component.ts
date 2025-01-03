import { Component, OnInit } from '@angular/core';
import { AdministrateurControllerService } from '../../services/services/administrateur-controller.service';
import { CompetenceDto } from '../../services/models/competence-dto';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Competence } from '../../services/models/competence';
import { ProfilControllerService } from '../../services/services/profil-controller.service';  // Import ProfilControllerService
import { ProfilRecruteurDto } from '../../services/models/profil-recruteur-dto';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-complete-profile',
  standalone: true,
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.css'],
  imports: [
    FormsModule,
    NgForOf
  ]
})
export class CompleteProfileComponent implements OnInit {
  user = { email: '', entreprise: '', experiences: 0, selectedCompetences: [] };
  competences: Competence[] = [];
  newCompetenceName = '';
  isRecruiter = false;
  receivedValue: string | null = null;

  constructor(
    private administrateurService: AdministrateurControllerService,
    private profilControllerService: ProfilControllerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
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
