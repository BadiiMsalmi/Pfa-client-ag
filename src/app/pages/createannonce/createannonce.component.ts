import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';  // Import FormControl
import { AdministrateurControllerService } from '../../services/services/administrateur-controller.service';
import { OffreEmploiControllerService } from '../../services/services/offre-emploi-controller.service';
import { TokenService } from '../../token/token.service';
import { AuthControllerService } from '../../services/services/auth-controller.service';
import {Router, RouterLink} from '@angular/router';
import { CompetenceDto } from '../../services/models/competence-dto';
import { Competence } from '../../services/models/competence';
import { OffreEmploiDto } from '../../services/models/offre-emploi-dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createannonce',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './createannonce.component.html',
  styleUrls: ['./createannonce.component.css'],
})
export class CreateannonceComponent implements OnInit {
  jobForm: FormGroup;
  newCompetenceControl: FormControl;  // Add a FormControl for newCompetenceName

  offreEmploi: OffreEmploiDto = {
    titre: '',
    description: '',
    competences: [],
    experience: 0,
    localisation: '',
    salaire: 0,
    recruteurId: 0,
  };

  competencesList: Competence[] = [];
  newCompetenceName = '';
  recId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private adminService: AdministrateurControllerService,
    private offreService: OffreEmploiControllerService,
    private tokenService: TokenService,
    private authService: AuthControllerService,
    private router: Router
  ) {
    this.jobForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      competences: [[], [Validators.required]],
      experience: ['', [Validators.required, Validators.min(0)]],
      localisation: ['', [Validators.required]],
      salaire: ['', [Validators.required, Validators.min(0)]],
    });

    // Initialize newCompetenceControl as a FormControl
    this.newCompetenceControl = new FormControl('');
  }

  ngOnInit(): void {
    this.loadCompetences();
    const recruiterId = this.tokenService.getIdFromToken();
    if (recruiterId) {
      this.recId = parseInt(recruiterId, 10);
      this.offreEmploi.recruteurId = this.recId;
    }
  }

  loadCompetences(): void {
    this.adminService.getAllCompetences().subscribe({
      next: (data: Competence[]) => {
        this.competencesList = data;
      },
      error: (err: any) => {
        console.error('Error fetching competences:', err);
      },
    });
  }

  addCompetence(): void {
    if (this.newCompetenceControl.value.trim()) {
      const newCompetence: CompetenceDto = {
        name: this.newCompetenceControl.value.trim(),
      };

      this.adminService.addNewCompetence({ body: newCompetence }).subscribe({
        next: (createdCompetence: CompetenceDto) => {
          this.competencesList.push(createdCompetence);
          console.log('Competence added:', createdCompetence);
          this.newCompetenceControl.reset();  // Reset FormControl after adding
        },
        error: (err: any) => {
          console.error('Error adding competence:', err);
        },
      });
    }
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      // Manually set the values from the form into the offreEmploi object
      this.offreEmploi.titre = this.jobForm.get('titre')?.value;
      this.offreEmploi.description = this.jobForm.get('description')?.value;
      this.offreEmploi.experience = this.jobForm.get('experience')?.value;
      this.offreEmploi.localisation = this.jobForm.get('localisation')?.value;
      this.offreEmploi.salaire = this.jobForm.get('salaire')?.value;

      // Add the selected competences from the form (competences is a multi-select)
      const selectedCompetences = this.jobForm.get('competences')?.value;
      this.offreEmploi.competences = selectedCompetences.map((id: number) => {
        return { id };  // Assuming competences is an array of objects with an 'id' property
      });

      const params = { body: this.offreEmploi };
      console.log('Submitting:', params);  // Check the data before submission

      this.offreService.createOffre(params).subscribe({
        next: (response) => {
          console.log('Offre created successfully:', response);
          alert('Offre créée avec succès !');
          this.jobForm.reset();
          this.offreEmploi = {
            titre: '',
            description: '',
            competences: [],
            experience: 0,
            localisation: '',
            salaire: 0,
            recruteurId: this.recId || 0,
          };
        },
        error: (err) => {
          console.error('Error creating offre:', err);
          alert("Erreur lors de la création de l'offre.");
        },
      });
    }
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
