import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';  // Module pour FileUpload
import { StepsModule } from 'primeng/steps';
import {ActivatedRoute, Router} from '@angular/router';
import {OffreEmploiControllerService} from '../../services/services/offre-emploi-controller.service';
import {OffreEmploi} from '../../services/models/offre-emploi';
import {Competence} from '../../services/models/competence';
import {ApplicationControllerService} from '../../services/services/application-controller.service';
import {AuthControllerService} from '../../services/services/auth-controller.service';
@Component({
  selector: 'app-postuler',
  standalone: true,
  imports: [    FormsModule,
      CommonModule,
      DataViewModule,
      TagModule,
      ButtonModule,
      DialogModule,
      ReactiveFormsModule,
      FileUploadModule,
      StepsModule
  ],
  templateUrl: './postuler.component.html',
  styleUrl: './postuler.component.css'
})

export class PostulerComponent implements OnInit{
  constructor(
    private route : ActivatedRoute,
    private offreEmploiService : OffreEmploiControllerService,
    private applicationService :ApplicationControllerService,
    private cdr: ChangeDetectorRef,
    private authService: AuthControllerService,
    private router: Router
  ) {
  }

  offreEmploi:OffreEmploi ={}
  receivedValue: string | null = null;
  competences: Competence[] | undefined = [];

  ngOnInit(): void{
    this.route.queryParamMap.subscribe((params) => {
      this.receivedValue = params.get('jobId');
      console.log('Received Value:', this.receivedValue);
    });

    this.offreEmploiService.getOffreById({id :this.receivedValue})
      .subscribe({
        next: (res ) => {
          this.offreEmploi = res;
          this.competences = res.competences ? [...res.competences] : [];
          this.cdr.detectChanges();
        },
        error: (err) => {

        }
      });

  }




    onSubmit(){
      // @ts-ignore
      let decodedJWT = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));

      console.log('id: ' + decodedJWT.id);
      // @ts-ignore
      this.applicationService.apply({candidatId:decodedJWT.id,offreId:this.receivedValue})
        .subscribe({
          next: (res ) => {
            console.log(res)
          },
          error: (err) => {
            console.log(err.error.error)
            if(err.error.error == "Query did not return a unique result: 3 results were returned"){
              console.log("Already applied for the job")
            }

          }
        })

    }


  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        this.router.navigate(['/acceuil']); // Redirect to login page
      },
      error: (err) => {
        console.error('Error during logout:', err);
      },
    });
  }
}
