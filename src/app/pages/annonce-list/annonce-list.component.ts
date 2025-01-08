import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CandidatControllerService } from '../../services/services/candidat-controller.service';
import { OffreEmploiSearchDto } from '../../services/models/offre-emploi-search-dto';
import {NgForOf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {Button} from 'primeng/button';
import {NavbarHeaderComponent} from '../navbar-header/navbar-header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css'],
  imports: [
    ReactiveFormsModule,
    NgForOf,
    RouterLink,
    Button,
    NavbarHeaderComponent,
    FooterComponent
  ],
  standalone: true
})
export class AnnonceListComponent implements OnInit {
  // Form controls for each search field
  titreControl = new FormControl('');
  localisationControl = new FormControl('');
  experienceControl = new FormControl('');
  salaireControl = new FormControl('');

  searchQuery: OffreEmploiSearchDto = {
    titre: '',
    localisation: '',
    experience: null,
    salaire: null,
  };
  jobs: OffreEmploiSearchDto[] = [];

  constructor(
    private candidatService: CandidatControllerService,
    private router : Router
  ) {}

  ngOnInit() {
    // Combine and subscribe to changes in search fields
    this.titreControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        // @ts-ignore
        this.searchQuery.titre = value;
        this.performSearch();
      });

    this.localisationControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        // @ts-ignore
        this.searchQuery.localisation = value;
        this.performSearch();
      });

    this.experienceControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.searchQuery.experience = value ? +value : null;
        this.performSearch();
      });

    this.salaireControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.searchQuery.salaire = value ? +value : null;
        this.performSearch();
      });
  }

  performSearch() {
    this.candidatService
      .searchOffres({ body: this.searchQuery })
      .subscribe((results) => {
        this.jobs = results;
      });
  }

  goToOffre(id: number | undefined){
    this.router.navigate(['postuler'], { queryParams: { jobId: id }})
  }
}
