import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { SortEvent } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Contact } from '../../services/models/contact';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    TableModule,
    MenuModule,
    InputTextModule,
    InputGroupModule,
    ButtonModule,
    FormsModule,
    BreadcrumbModule,
  ],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];

  ngOnInit() {
    this.loadContacts();
  }

  // Charger les contacts depuis le LocalStorage
  loadContacts() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts') || '[]') as Contact[];
    this.contacts = savedContacts;
    this.filteredContacts = [...this.contacts];
  }

  // Fonction de recherche
  onSearch(query: string) {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase()) ||
      contact.message.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Fonction pour supprimer un contact
  removeContact(contact: Contact) {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.filteredContacts = this.filteredContacts.filter(c => c !== contact);

    // Mettre à jour le localStorage après la suppression
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
