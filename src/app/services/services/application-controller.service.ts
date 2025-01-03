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

import { accepterApplication } from '../fn/application-controller/accepter-application';
import { AccepterApplication$Params } from '../fn/application-controller/accepter-application';
import { annulerCandidature } from '../fn/application-controller/annuler-candidature';
import { AnnulerCandidature$Params } from '../fn/application-controller/annuler-candidature';
import { Application } from '../models/application';
import { apply } from '../fn/application-controller/apply';
import { Apply$Params } from '../fn/application-controller/apply';
import { getApplicationsForCandidat } from '../fn/application-controller/get-applications-for-candidat';
import { GetApplicationsForCandidat$Params } from '../fn/application-controller/get-applications-for-candidat';
import { getApplicationsForOffre } from '../fn/application-controller/get-applications-for-offre';
import { GetApplicationsForOffre$Params } from '../fn/application-controller/get-applications-for-offre';
import { refuserApplication } from '../fn/application-controller/refuser-application';
import { RefuserApplication$Params } from '../fn/application-controller/refuser-application';

@Injectable({ providedIn: 'root' })
export class ApplicationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `refuserApplication()` */
  static readonly RefuserApplicationPath = '/api/applications/refuserApplication/{appId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refuserApplication()` instead.
   *
   * This method doesn't expect any request body.
   */
  refuserApplication$Response(params: RefuserApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return refuserApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refuserApplication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  refuserApplication(params: RefuserApplication$Params, context?: HttpContext): Observable<void> {
    return this.refuserApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apply()` */
  static readonly ApplyPath = '/api/applications/apply/{candidatId}/{offreId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apply()` instead.
   *
   * This method doesn't expect any request body.
   */
  apply$Response(params: Apply$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return apply(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apply$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apply(params: Apply$Params, context?: HttpContext): Observable<string> {
    return this.apply$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `accepterApplication()` */
  static readonly AccepterApplicationPath = '/api/applications/acceptApplication/{appId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accepterApplication()` instead.
   *
   * This method doesn't expect any request body.
   */
  accepterApplication$Response(params: AccepterApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return accepterApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accepterApplication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accepterApplication(params: AccepterApplication$Params, context?: HttpContext): Observable<void> {
    return this.accepterApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getApplicationsForOffre()` */
  static readonly GetApplicationsForOffrePath = '/api/applications/offre/{offreId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationsForOffre()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsForOffre$Response(params: GetApplicationsForOffre$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Application>>> {
    return getApplicationsForOffre(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationsForOffre$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsForOffre(params: GetApplicationsForOffre$Params, context?: HttpContext): Observable<Array<Application>> {
    return this.getApplicationsForOffre$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Application>>): Array<Application> => r.body)
    );
  }

  /** Path part for operation `getApplicationsForCandidat()` */
  static readonly GetApplicationsForCandidatPath = '/api/applications/candidat/{candidatId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApplicationsForCandidat()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsForCandidat$Response(params: GetApplicationsForCandidat$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Application>>> {
    return getApplicationsForCandidat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getApplicationsForCandidat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApplicationsForCandidat(params: GetApplicationsForCandidat$Params, context?: HttpContext): Observable<Array<Application>> {
    return this.getApplicationsForCandidat$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Application>>): Array<Application> => r.body)
    );
  }

  /** Path part for operation `annulerCandidature()` */
  static readonly AnnulerCandidaturePath = '/api/applications/annuler/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annulerCandidature()` instead.
   *
   * This method doesn't expect any request body.
   */
  annulerCandidature$Response(params: AnnulerCandidature$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return annulerCandidature(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `annulerCandidature$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  annulerCandidature(params: AnnulerCandidature$Params, context?: HttpContext): Observable<void> {
    return this.annulerCandidature$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
