import {Component, OnInit} from '@angular/core';
import {FormStep} from "../../../../models/form-step.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GoalForm} from "../../../../forms/goal.form";
import {GoalService} from "../../../../services/goal.service";
import {GoalCategory} from "../../../../dto/goal/goal-category,dto";
import {FormField} from "../../../../models/form-field.model";

@Component({
  selector: 'app-create-goal-dialog',
  templateUrl: './create-goal-dialog.component.html',
  styleUrls: ['./create-goal-dialog.component.scss']
})
export class CreateGoalDialogComponent implements OnInit {

  public goalForm: FormGroup<GoalForm>;
  private nameControl: FormControl = new FormControl<string>('',
    {
      nonNullable: true,
      validators: [Validators.required]
    });
  private categoryControl: FormControl = new FormControl<string>('',
    {
      nonNullable: true,
      validators: [Validators.required]
    });
  private priceControl: FormControl = new FormControl<string>('',
    {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)]
    });
  private categories: GoalCategory[] = [];
  private categoryField: FormField = {
    name: "Category",
    type: "select",
    control: this.categoryControl,
    value: this.categories
  }

  public formSteps: FormStep[] = [
    {
      name: "Name of your goal",
      step: 0,
      fields: [
        {
          name: "Name",
          type: "text",
          control: this.nameControl,
        },
        this.categoryField
      ]
    },
    {
      name: "Name",
      step: 1,
      fields: [
        {
          name: "Name",
          type: "text",
          control: this.nameControl,
        },
        {
          name: "Name",
          type: "text",
          control: this.nameControl,
        }
      ]
    }
  ];

  constructor(private goalService: GoalService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.goalForm = new FormGroup<GoalForm>(<GoalForm>{
        name: this.nameControl,
        category: this.categoryControl
      }
    );
  }

  private getCategories(): void {
    this.goalService.getCategories().subscribe(
      {
        next: (res) => {
          this.categoryField.value = res;
        }
      }
    );
  }
}
