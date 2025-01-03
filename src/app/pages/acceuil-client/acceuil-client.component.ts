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
import { AuthControllerService } from '../../services/services/auth-controller.service';
import {Router} from '@angular/router';
import {OffreEmploiControllerService} from '../../services/services/offre-emploi-controller.service';
import {OffreEmploiDto} from '../../services/models/offre-emploi-dto';

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

  constructor(
    private authService: AuthControllerService,
    private router: Router,
    private offreEmploiService: OffreEmploiControllerService
  ) {
  }
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
  focus: any;
  focus1: any;
  layout: 'list' | 'grid' = 'list';

  jobs : OffreEmploiDto[] = [];

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

  ngOnInit():void {
    this.offreEmploiService.getAllOffres().subscribe((
      {
        next:(res)=>{
          this.jobs = res;
          console.log(res)
        },
        error:(err)=>{

        }
      }
    ))
  }

  goToOffre(id: number | undefined){
    this.router.navigate(['postuler'], { queryParams: { jobId: id }})
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
