import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonDirective} from 'primeng/button';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {FloatLabelModule} from 'primeng/floatlabel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {Router} from '@angular/router';
import { AuthControllerService } from '../../services/services/auth-controller.service';
import {RegisterRequest} from '../../services/models/register-request';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonDirective,
    DropdownModule,
    FloatLabelModule,
    RadioButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerRequest : RegisterRequest = {accountname:'',email:'',firstname:'',lastname:'',password:'',role:'ROLE_RECRUTEUR'}
  errorMsg : Array<string> = []

  constructor(
    private router:Router,
    private authService : AuthControllerService
  ) {
  }

  goToLogin() {
    this.router.navigate(['login'])
  }

  register() {
    this.errorMsg = []
    this.authService.register({
      body:this.registerRequest
    }).subscribe({
      next:()=>{
        this.router.navigate(['completeProfile'], { queryParams: { email: this.registerRequest.email,role:this.registerRequest.role } });
      },
      error:(err:any)=>{
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        } else if(err.error.error){
          this.errorMsg.push(err.error.error);
        }else {
          this.errorMsg.push(err.error.errorMsg);
        }

    }
    })

  }
}
