/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Formation } from '../../models/formation';

export interface CreateFormation$Params {
      body: Formation
}

export function createFormation(http: HttpClient, rootUrl: string, params: CreateFormation$Params, context?: HttpContext): Observable<StrictHttpResponse<Formation>> {
  const rb = new RequestBuilder(rootUrl, createFormation.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Formation>;
    })
  );
}

createFormation.PATH = '/formations/addFormation';