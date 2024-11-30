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

import { getAllUsers } from '../fn/utilisateur-controller/get-all-users';
import { GetAllUsers$Params } from '../fn/utilisateur-controller/get-all-users';
import { UserEntity } from '../models/user-entity';

@Injectable({ providedIn: 'root' })
export class UtilisateurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  static readonly GetAllUsersPath = '/api/v1/users/allUsers';


  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserEntity>>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<Array<UserEntity>> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserEntity>>): Array<UserEntity> => r.body)
    );
  }

}
