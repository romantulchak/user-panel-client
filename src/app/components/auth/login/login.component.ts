import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginForm} from "../../../forms/login.form";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup<LoginForm>;
  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = new FormGroup<LoginForm>(<LoginForm>{
        email: new FormControl<string>('',
          {
            nonNullable: true,
            validators: [Validators.required, Validators.email]
          }),
        password: new FormControl<string>('',
          {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(8), Validators.maxLength(24)]
          })
      }
    );
  }

}
