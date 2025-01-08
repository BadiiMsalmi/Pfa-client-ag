import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthControllerService} from '../../services/services/auth-controller.service';
import {TokenService} from '../../token/token.service';

@Component({
  selector: 'app-navbar-header',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './navbar-header.component.html',
  styleUrl: './navbar-header.component.css'
})
export class NavbarHeaderComponent implements OnInit{

  role: String | undefined
  isRecruter : boolean = false
  constructor(
    private authService: AuthControllerService,
    private router : Router,
    private tokenService :TokenService
  ) {


  }

  ngOnInit(){
    this.role = this.tokenService.getRoleFromToken()
    if(this.role == "ROLE_RECRUTEUR") {
      this.isRecruter = true
    }
    console.log(this.isRecruter)
  }


  logout() {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/authenticate']);
      },
      error: (err) => {
        console.error('Error during logout:', err);
      },
    });
  }
}
