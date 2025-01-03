/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OffreEmploiSearchDto } from '../../models/offre-emploi-search-dto';

export interface SearchOffres$Params {
      body: OffreEmploiSearchDto
}

export function searchOffres(http: HttpClient, rootUrl: string, params: SearchOffres$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OffreEmploiSearchDto>>> {
  const rb = new RequestBuilder(rootUrl, searchOffres.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OffreEmploiSearchDto>>;
    })
  );
}

searchOffres.PATH = '/api/v1/candidats/searchOffre';