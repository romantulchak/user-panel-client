import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationForm} from "../../../forms/registration.form";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup<RegistrationForm>;

  ngOnInit(): void {
  }

  private initForm(): void {
    this.registrationForm = new FormGroup<RegistrationForm>(<RegistrationForm>{
      firstName: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      lastName: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(35)]
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(24)]
      })
    })
  }
}
