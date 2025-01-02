import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class PostulerComponent {
    formGroup =new FormGroup({
      Nom: new FormControl(''),
     Prénom: new FormControl(''),
    telephone:new FormControl(0),
    lettredeMotivation :new FormControl(''),
    votrecv:new FormControl(File),
    pays:new FormControl(''),
    ragion:new FormControl(''),
    });
    onSubmit(){
      console.log(this.formGroup.value);
    }
    }
  