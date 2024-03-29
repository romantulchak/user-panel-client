import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormStep} from "../../../models/form-step.model";
import {FormArray, FormGroup} from "@angular/forms";
import {FormField} from "../../../models/form-field.model";

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
  @Input('arrayName')
  public formArrayName: string;
  @Output('complete')
  public completeEvent: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  public currentStepIndex = 0;
  public currentStep: FormStep;
  public maxSteps: number;
  public formArray: FormArray;

  ngOnInit(): void {
    this.currentStep = this.formSteps[this.currentStepIndex];
    this.maxSteps = this.formSteps.length - 1;
    if (this.formArrayName) {
      this.getFormArray();
    }
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
    if (this.formGroup.value) {
      this.completeEvent.next(this.formGroup);
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  public onInputChange(event: any, field: FormField) {
    if (field.type === 'checkbox') {
      if (event.target.checked) {
        console.log(!!event.target.value)
        field.control.setValue(!!event.target.value);
      } else {
        field.control.setValue(false);
      }
    }
  }

  private updateStep(): void {
    this.currentStep = this.formSteps[this.currentStepIndex];
  }

  private getFormArray(): void {
    this.formArray = this.formGroup.controls[this.formArrayName] as FormArray;
  }
}
