import {Injectable} from "@angular/core";
import {UserTokenService} from "../services/user-token.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userTokenService: UserTokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.userTokenService.getToken();
    req = this.addTokenHeader(req, token);

    return next.handle(req);
  }

  private addTokenHeader(request: HttpRequest<any>, token?: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
