/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { completeProfileCandidat } from '../fn/profil-controller/complete-profile-candidat';
import { CompleteProfileCandidat$Params } from '../fn/profil-controller/complete-profile-candidat';
import { completeProfileRecruteur } from '../fn/profil-controller/complete-profile-recruteur';
import { CompleteProfileRecruteur$Params } from '../fn/profil-controller/complete-profile-recruteur';

@Injectable({ providedIn: 'root' })
export class ProfilControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `completeProfileRecruteur()` */
  static readonly CompleteProfileRecruteurPath = '/api/v1/profile/recruteur/completeProfile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `completeProfileRecruteur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  completeProfileRecruteur$Response(params: CompleteProfileRecruteur$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return completeProfileRecruteur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `completeProfileRecruteur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  completeProfileRecruteur(params: CompleteProfileRecruteur$Params, context?: HttpContext): Observable<void> {
    return this.completeProfileRecruteur$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `completeProfileCandidat()` */
  static readonly CompleteProfileCandidatPath = '/api/v1/profile/candidat/completeProfile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `completeProfileCandidat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  completeProfileCandidat$Response(params: CompleteProfileCandidat$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return completeProfileCandidat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `completeProfileCandidat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  completeProfileCandidat(params: CompleteProfileCandidat$Params, context?: HttpContext): Observable<void> {
    return this.completeProfileCandidat$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
