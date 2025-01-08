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
import {AnnonceListComponent} from './pages/annonce-list/annonce-list.component';
import {CreateannonceComponent} from './pages/createannonce/createannonce.component';
import {NotificationComponent} from './pages/notification/notification.component';
import {CompleteProfileComponent} from './pages/complete-profile/complete-profile.component';

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
    path:'authenticate',
    component:LandingComponent
  },
  {
    path:'jobs',
    component:AnnonceListComponent
  },
  {
    path:'annonce',
    component:  CreateannonceComponent
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

  { path: 'acceuil-client', component: AcceuilClientComponent },

  {path:'notifications' , component:NotificationComponent},

  {path:'completeProfile', component:CompleteProfileComponent},

  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'login', component: AdminLoginComponent , canActivate: [AuthGuard]},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'gestion-users', component: UsersListComponent },
      { path: 'gestion-jobs', component: JobListComponent },
      { path: 'gestion-contacts', component: ContactListComponent },

    ],
  },
];
export const routing = RouterModule.forRoot(routes);  // Register routes
