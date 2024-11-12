/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { GrantedAuthority } from '../models/granted-authority';
export interface UserEntity {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  accountname?: string;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  id?: number;
  inscriptionDate?: string;
  lastname?: string;
  password?: string;
  profileCompleted?: boolean;
  role?: 'ROLE_ADMIN' | 'ROLE_CANDIDAT' | 'ROLE_RECRUTEUR';
  username?: string;
}
