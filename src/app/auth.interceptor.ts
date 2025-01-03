import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log('Intercepting request:', req);
    if (token) {
      console.log('Token found in local storage:', token);  // Log the token to check
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Cloned Request with Token:', clonedRequest);  // Log the cloned request with the token
      return next.handle(clonedRequest);
    } else {
      console.log('No token found');  // Log if the token is missing
      return next.handle(req);  // Continue without modifying the request if no token
    }
  }

}
