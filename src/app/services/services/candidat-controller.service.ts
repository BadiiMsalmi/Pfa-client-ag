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

import { Candidat } from '../models/candidat';
import { createCandidat } from '../fn/candidat-controller/create-candidat';
import { CreateCandidat$Params } from '../fn/candidat-controller/create-candidat';
import { deleteCandidat } from '../fn/candidat-controller/delete-candidat';
import { DeleteCandidat$Params } from '../fn/candidat-controller/delete-candidat';
import { getAllCandidats } from '../fn/candidat-controller/get-all-candidats';
import { GetAllCandidats$Params } from '../fn/candidat-controller/get-all-candidats';
import { getCandidatById } from '../fn/candidat-controller/get-candidat-by-id';
import { GetCandidatById$Params } from '../fn/candidat-controller/get-candidat-by-id';
import { updateCandidat } from '../fn/candidat-controller/update-candidat';
import { UpdateCandidat$Params } from '../fn/candidat-controller/update-candidat';

@Injectable({ providedIn: 'root' })
export class CandidatControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCandidat()` */
  static readonly UpdateCandidatPath = '/api/v1/candidats/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCandidat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCandidat$Response(params: UpdateCandidat$Params, context?: HttpContext): Observable<StrictHttpResponse<Candidat>> {
    return updateCandidat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCandidat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCandidat(params: UpdateCandidat$Params, context?: HttpContext): Observable<Candidat> {
    return this.updateCandidat$Response(params, context).pipe(
      map((r: StrictHttpResponse<Candidat>): Candidat => r.body)
    );
  }

  /** Path part for operation `createCandidat()` */
  static readonly CreateCandidatPath = '/api/v1/candidats/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCandidat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCandidat$Response(params: CreateCandidat$Params, context?: HttpContext): Observable<StrictHttpResponse<Candidat>> {
    return createCandidat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCandidat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCandidat(params: CreateCandidat$Params, context?: HttpContext): Observable<Candidat> {
    return this.createCandidat$Response(params, context).pipe(
      map((r: StrictHttpResponse<Candidat>): Candidat => r.body)
    );
  }

  /** Path part for operation `getCandidatById()` */
  static readonly GetCandidatByIdPath = '/api/v1/candidats/getOne/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCandidatById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCandidatById$Response(params: GetCandidatById$Params, context?: HttpContext): Observable<StrictHttpResponse<Candidat>> {
    return getCandidatById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCandidatById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCandidatById(params: GetCandidatById$Params, context?: HttpContext): Observable<Candidat> {
    return this.getCandidatById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Candidat>): Candidat => r.body)
    );
  }

  /** Path part for operation `getAllCandidats()` */
  static readonly GetAllCandidatsPath = '/api/v1/candidats/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCandidats()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCandidats$Response(params?: GetAllCandidats$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Candidat>>> {
    return getAllCandidats(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCandidats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCandidats(params?: GetAllCandidats$Params, context?: HttpContext): Observable<Array<Candidat>> {
    return this.getAllCandidats$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Candidat>>): Array<Candidat> => r.body)
    );
  }

  /** Path part for operation `deleteCandidat()` */
  static readonly DeleteCandidatPath = '/api/v1/candidats/remove/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCandidat()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCandidat$Response(params: DeleteCandidat$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCandidat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCandidat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCandidat(params: DeleteCandidat$Params, context?: HttpContext): Observable<void> {
    return this.deleteCandidat$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
