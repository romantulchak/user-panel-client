import {Component, OnInit} from '@angular/core';
import {FormStep} from "../../../../models/form-step.model";

@Component({
  selector: 'app-create-goal-dialog',
  templateUrl: './create-goal-dialog.component.html',
  styleUrls: ['./create-goal-dialog.component.scss']
})
export class CreateGoalDialogComponent implements OnInit {

  public formSteps: FormStep[] = [
    {
      name: "Name of your goal",
      step: 1,
      fields: [
        {
          name: "Name",
          type: "text",
          required: true
        },
        {
          name: "Name",
          type: "text",
          required: true
        }
      ]
    },
    {
      name: "Name of your goal",
      step: 2,
      fields: [
        {
          name: "Name",
          type: "text",
          required: true
        },
        {
          name: "Name",
          type: "text",
          required: true
        }
      ]
    }
  ]

  public currentStep = this.formSteps[0];
  public currentStepIndex = 0;

  ngOnInit(): void {
  }


}
