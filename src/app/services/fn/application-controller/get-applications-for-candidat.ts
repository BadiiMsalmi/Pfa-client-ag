/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Application } from '../../models/application';

export interface GetApplicationsForCandidat$Params {
  candidatId: number;
}

export function getApplicationsForCandidat(http: HttpClient, rootUrl: string, params: GetApplicationsForCandidat$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Application>>> {
  const rb = new RequestBuilder(rootUrl, getApplicationsForCandidat.PATH, 'get');
  if (params) {
    rb.path('candidatId', params.candidatId, {});
  }
  rb.header('Authorization', `Bearer ${localStorage.getItem('token')}`);
  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Application>>;
    })
  );
}

getApplicationsForCandidat.PATH = '/api/applications/candidat/{candidatId}';