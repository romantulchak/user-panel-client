import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginForm} from "../../../forms/login.form";
import {AuthService} from "../../../services/auth.service";
import {SignInRequest} from "../../../payload/requests/sign-in.request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup<LoginForm>;

  public emailFormControl: FormControl = new FormControl<string>('',
    {
      nonNullable: true,
      validators: [ Validators.email, Validators.required]
    });
 public passwordFormControl: FormControl = new FormControl<string>('',
   {
     nonNullable: true,
     validators: [Validators.required, Validators.minLength(8), Validators.maxLength(24)]
   })

  constructor(private authService: AuthService) {
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
      res => {
        console.log(res)
      }
    )
  }

  private initForm(): void {
    this.loginForm = new FormGroup<LoginForm>(<LoginForm>{
        email: this.emailFormControl,
        password: this.passwordFormControl
      }
    );
  }
}
