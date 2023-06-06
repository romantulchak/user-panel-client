import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {JwtResponse} from "../payload/response/jwt.response";
import {SignUpRequest} from "../payload/requests/auth/sign-up.request";
import {SignInRequest} from "../payload/requests/auth/sign-in.request";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  public signIn(signInRequest: SignInRequest): Observable<JwtResponse> {
    return super.post(`auth/sign-in`, signInRequest);
  }

  public signUp(signUpRequest: SignUpRequest): Observable<JwtResponse> {
    return super.post(`auth/sign-up`, signUpRequest);
  }
}
