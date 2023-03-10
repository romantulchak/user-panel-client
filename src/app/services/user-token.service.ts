import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserTokenService {

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
