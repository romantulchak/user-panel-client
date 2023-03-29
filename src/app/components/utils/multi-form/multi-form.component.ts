import {Component, Input, OnInit} from '@angular/core';
import {FormStep} from "../../../models/form-step.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-multi-form[formSteps][formGroup]',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.scss']
})
export class MultiFormComponent implements OnInit {

  @Input('formSteps')
  public formSteps: FormStep[];
  @Input('formGroup')
  public formGroup: FormGroup;
  public currentStepIndex = 0;
  public currentStep: FormStep;
  public maxSteps: number;

  ngOnInit(): void {
    this.currentStep = this.formSteps[this.currentStepIndex];
    this.maxSteps = this.formSteps.length - 1;
  }

  public nextStep(): void {
    this.currentStepIndex++;
    this.updateStep();
  }

  public previousStep(): void {
    this.currentStepIndex--;
    this.updateStep();
  }

  public complete(): void {

  }

  private updateStep(): void {
    this.currentStep = this.formSteps[this.currentStepIndex];
  }
}
