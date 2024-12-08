import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact-client',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  
    ButtonModule,
  ],
  templateUrl: './contact-client.component.html',
  styleUrl: './contact-client.component.css'
})
export class ContactClientComponent implements OnInit{
  focus: any;
  focus1: any;
  ngOnInit() {}

}
