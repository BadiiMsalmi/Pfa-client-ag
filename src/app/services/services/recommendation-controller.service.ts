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

import { FormationRecommendationDto } from '../models/formation-recommendation-dto';
import { getFormationRecommendations } from '../fn/recommendation-controller/get-formation-recommendations';
import { GetFormationRecommendations$Params } from '../fn/recommendation-controller/get-formation-recommendations';
import { getOffresRecommendations } from '../fn/recommendation-controller/get-offres-recommendations';
import { GetOffresRecommendations$Params } from '../fn/recommendation-controller/get-offres-recommendations';
import { OffreRecommendationDto } from '../models/offre-recommendation-dto';

@Injectable({ providedIn: 'root' })
export class RecommendationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getOffresRecommendations()` */
  static readonly GetOffresRecommendationsPath = '/api/v1/recommendations/offres/{candidatId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOffresRecommendations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOffresRecommendations$Response(params: GetOffresRecommendations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OffreRecommendationDto>>> {
    return getOffresRecommendations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOffresRecommendations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOffresRecommendations(params: GetOffresRecommendations$Params, context?: HttpContext): Observable<Array<OffreRecommendationDto>> {
    return this.getOffresRecommendations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OffreRecommendationDto>>): Array<OffreRecommendationDto> => r.body)
    );
  }

  /** Path part for operation `getFormationRecommendations()` */
  static readonly GetFormationRecommendationsPath = '/api/v1/recommendations/api/v1/recommendations/formations/{candidatId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFormationRecommendations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormationRecommendations$Response(params: GetFormationRecommendations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FormationRecommendationDto>>> {
    return getFormationRecommendations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFormationRecommendations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormationRecommendations(params: GetFormationRecommendations$Params, context?: HttpContext): Observable<Array<FormationRecommendationDto>> {
    return this.getFormationRecommendations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FormationRecommendationDto>>): Array<FormationRecommendationDto> => r.body)
    );
  }

}