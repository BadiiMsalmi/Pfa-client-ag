/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OffreEmploi } from '../../models/offre-emploi';
import { OffreEmploiDto } from '../../models/offre-emploi-dto';

export interface UpdateOffre$Params {
  id: number;
      body: OffreEmploiDto
}

export function updateOffre(http: HttpClient, rootUrl: string, params: UpdateOffre$Params, context?: HttpContext): Observable<StrictHttpResponse<OffreEmploi>> {
  const rb = new RequestBuilder(rootUrl, updateOffre.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OffreEmploi>;
    })
  );
}

updateOffre.PATH = '/api/v1/offres/updateoffre/{id}';
