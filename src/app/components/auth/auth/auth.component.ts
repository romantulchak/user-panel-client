import {Component, OnInit} from '@angular/core';
import {UserTokenService} from "../../../services/user-token.service";
import {Router} from "@angular/router";
import {JwtResponse} from "../../../payload/response/jwt.response";
import {ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public isLogin: boolean = true;

  constructor(private userTokenService: UserTokenService,
              private toastService: ToastService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  public authenticateUser(jwtResponse: JwtResponse): void {
    this.userTokenService.saveToken(jwtResponse.token);
    this.router.navigateByUrl('/home').then()
    this.toastService.showSuccess('Login success', `User ${jwtResponse.email} logged success`);
  }
}
