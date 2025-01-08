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
import {UtilisateurControllerService} from '../../services/services/utilisateur-controller.service';
import {UserDetailsDto} from '../../services/models/user-details-dto';
import {NavbarHeaderComponent} from "../navbar-header/navbar-header.component";
@Component({
  selector: 'app-profile',
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
        NavbarHeaderComponent
    ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  profile: UserDetailsDto = {};
  constructor(
    private authService: AuthControllerService,
    private userService: UtilisateurControllerService,
    private router: Router
  ) { }

    ngOnInit() {

      // @ts-ignore
      let decodedJWT = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));

      console.log('name: ' + decodedJWT.id);
      this.userService.getUserById({ id: decodedJWT.id }).subscribe({
        next: (res)=>{
          this.profile=res;
          console.log(res)
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
