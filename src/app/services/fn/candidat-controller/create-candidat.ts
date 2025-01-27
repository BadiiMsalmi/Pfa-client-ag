/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Candidat } from '../../models/candidat';

export interface CreateCandidat$Params {
      body: Candidat
}

export function createCandidat(http: HttpClient, rootUrl: string, params: CreateCandidat$Params, context?: HttpContext): Observable<StrictHttpResponse<Candidat>> {
  const rb = new RequestBuilder(rootUrl, createCandidat.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Candidat>;
    })
  );
}

createCandidat.PATH = '/api/v1/candidats/create';
