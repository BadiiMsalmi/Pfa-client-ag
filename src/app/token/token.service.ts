import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set token(token :string){
    localStorage.setItem('token', token)
  }

  get token(){
    return localStorage.getItem('token') as string
  }

  getIdFromToken(){
    // @ts-ignore
    let decodedJWT = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    return decodedJWT.id
  }

  getRoleFromToken(){
    // @ts-ignore
    let decodedJWT = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    return decodedJWT.role
  }
}
