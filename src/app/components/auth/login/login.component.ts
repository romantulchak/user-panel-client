import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginForm} from "../../../forms/login.form";
import {AuthService} from "../../../services/auth.service";
import {SignInRequest} from "../../../payload/requests/auth/sign-in.request";
import {ToastService} from "../../../services/toast.service";
import {JwtResponse} from "../../../payload/response/jwt.response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output('showSignUpForm')
  signUpEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('afterLogin')
  afterLoginEvent: EventEmitter<JwtResponse> = new EventEmitter<JwtResponse>();
  public loginForm: FormGroup<LoginForm>;

  public emailFormControl: FormControl = new FormControl<string>('',
    {
      nonNullable: true,
      validators: [Validators.email, Validators.required]
    });
  public passwordFormControl: FormControl = new FormControl<string>('',
    {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(24)]
    })

  constructor(private authService: AuthService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public signIn(): void {
    const signInRequest = {
      email: this.emailFormControl?.value,
      password: this.passwordFormControl?.value
    } as SignInRequest

    this.authService.signIn(signInRequest).subscribe(
      {
        next: (jwtResponse) => {
          this.afterLoginEvent.next(jwtResponse);
        },
        error: (error) => {
          this.toastService.showError('Something went wrong', 'Try again');
        }
      }
    )
  }

  public showSignUpForm(): void {
    this.signUpEvent.next(true);
  }

  private initForm(): void {
    this.loginForm = new FormGroup<LoginForm>(<LoginForm>{
        email: this.emailFormControl,
        password: this.passwordFormControl
      }
    );
  }
}
