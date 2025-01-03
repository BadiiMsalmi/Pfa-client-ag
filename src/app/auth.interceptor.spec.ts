import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpRequest, HttpHandler } from '@angular/common/http';

describe('AuthInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let interceptor: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(AuthInterceptor); // Inject the interceptor
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header if token exists', () => {
    // Simulating a request
    const token = 'dummy-token';
    localStorage.setItem('token', token);

    // Make an HTTP request
    httpClient.get('/test').subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${token}`);

    httpTestingController.verify();
  });

  it('should not add Authorization header if token is missing', () => {
    // Simulating a request without a token
    localStorage.removeItem('token');

    httpClient.get('/test').subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBeFalse();

    httpTestingController.verify();
  });
});
