import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {LandingComponent} from './pages/landing/landing.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AuthGuard } from './auth.guard';
import { AcceuilClientComponent } from './pages/acceuil-client/acceuil-client.component';
import { ContactClientComponent } from './pages/contact-client/contact-client.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfilComponent } from './pages/edit-profil/edit-profil.component';
import { JobListComponent } from './admin/job-list/job-list.component';
import { ContactListComponent } from './admin/contact-list/contact-list.component';
import { PostulerComponent } from './pages/postuler/postuler.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'edit-profile',
    component: EditProfilComponent
  },

  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'acceuil',
    component:LandingComponent
  },

  {
    path:'contact',
    component:ContactClientComponent
  },


  {
    path:'profile',
    component:ProfileComponent
  },
  { path: 'postuler', component: PostulerComponent },

  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'acceuil-client', component: AcceuilClientComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'gestion-users', component: UsersListComponent },
      { path: 'gestion-jobs', component: JobListComponent },
      { path: 'gestion-contacts', component: ContactListComponent },

    ],
  },
];
export const routing = RouterModule.forRoot(routes);  // Register routes
