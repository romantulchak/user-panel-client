import {Component, OnInit} from '@angular/core';
import {FormStep} from "../../../../models/form-step.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GoalForm} from "../../../../forms/goal.form";

@Component({
  selector: 'app-create-goal-dialog',
  templateUrl: './create-goal-dialog.component.html',
  styleUrls: ['./create-goal-dialog.component.scss']
})
export class CreateGoalDialogComponent implements OnInit {

  public goalForm: FormGroup<GoalForm>;
  public nameFormControl: FormControl = new FormControl<string>('',
    {
      nonNullable: true,
      validators: [Validators.required]
    });


  public formSteps: FormStep[] = [
    {
      name: "Name of your goal",
      step: 0,
      fields: [
        {
          name: "Name",
          type: "text",
          control: this.nameFormControl,
        },
        {
          name: "Name",
          type: "text",
          control: this.nameFormControl,
        }
      ]
    },
    {
      name: "Name",
      step: 1,
      fields: [
        {
          name: "Name",
          type: "text",
          control: this.nameFormControl,
        },
        {
          name: "Name",
          type: "text",
          control: this.nameFormControl,
        }
      ]
    }
  ]

  ngOnInit(): void {
    this.goalForm = new FormGroup<GoalForm>(<GoalForm>{
        name: this.nameFormControl,
      }
    )
  }
}
