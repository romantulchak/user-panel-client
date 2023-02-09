import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {SignInRequest} from "../payload/requests/sign-in.request";
import {Observable} from "rxjs";
import {JwtResponse} from "../payload/response/jwt.response";
import {environment} from "../../environments/environment";

const API_URL = environment.apiUrlV1;

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  signIn(signInRequest: SignInRequest): Observable<JwtResponse> {
    return this.post(`${API_URL}/auth/sign-in`, signInRequest);
  }
}
