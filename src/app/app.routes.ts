import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {LandingComponent} from './pages/landing/landing.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'acceuil',
    component:AccueilComponent
  },
 

  { path: 'dashboard', component: DashboardComponent },

];
export const routing = RouterModule.forRoot(routes);  // Register routes
