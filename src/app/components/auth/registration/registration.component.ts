import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationForm} from "../../../forms/registration.form";
import {AuthService} from "../../../services/auth.service";
import {SignUpRequest} from "../../../payload/requests/auth/sign-up.request";
import {JwtResponse} from "../../../payload/response/jwt.response";
import {ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Output('showLoginForm')
  public showLoginFormEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output('afterLogin')
  public afterLoginEvent: EventEmitter<JwtResponse> = new EventEmitter<JwtResponse>();
  public registrationForm: FormGroup<RegistrationForm>;
  public emailFormControl: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(35)]
  });
  public passwordFormControl: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(8), Validators.maxLength(24)]
  });
  public firstNameFormControl: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });
  public lastNameFormControl: FormControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required]
  });

  constructor(private authService: AuthService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public signUp() {
    const signUpRequest = {
      firstName: this.firstNameFormControl?.value,
      lastName: this.lastNameFormControl?.value,
      email: this.emailFormControl?.value,
      password: this.passwordFormControl?.value
    } as SignUpRequest;

    this.authService.signUp(signUpRequest).subscribe(
      {
        next: (jwtResponse) => {
          this.afterLoginEvent.next(jwtResponse);
        },
        error: (error) => {
          this.toastService.showError('Error', error.code)
        }
      }
    )
  }

  public showSignUpForm(): void {
    this.showLoginFormEvent.next(true);
  }

  private initForm(): void {
    this.registrationForm = new FormGroup<RegistrationForm>(<RegistrationForm>{
      firstName: this.firstNameFormControl,
      lastName: this.lastNameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }
}
