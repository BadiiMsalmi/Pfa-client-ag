/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccepterApplication$Params {
  appId: number;
}

export function accepterApplication(http: HttpClient, rootUrl: string, params: AccepterApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, accepterApplication.PATH, 'post');
  if (params) {
    rb.path('appId', params.appId, {});
  }
  rb.header('Authorization', `Bearer ${localStorage.getItem('token')}`);
  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

accepterApplication.PATH = '/api/applications/acceptApplication/{appId}';