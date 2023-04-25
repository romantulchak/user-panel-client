import {Component, OnInit} from '@angular/core';
import {FormStep} from "../../../../models/form-step.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GoalForm} from "../../../../forms/goal.form";
import {GoalService} from "../../../../services/goal.service";
import {GoalCategory} from "../../../../dto/goal/goal-category,dto";
import {FormField} from "../../../../models/form-field.model";
import {GoalCreateRequest} from "../../../../payload/requests/goal/goal-create.request";

@Component({
  selector: 'app-create-goal-dialog',
  templateUrl: './create-goal-dialog.component.html',
  styleUrls: ['./create-goal-dialog.component.scss']
})
export class CreateGoalDialogComponent implements OnInit {

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
  private priceControl: FormControl = new FormControl<number>(1,
    {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)]
    });
  private isActiveControl: FormControl = new FormControl<boolean>(false);
  private categories: GoalCategory[] = [];
  private categoryField: FormField = {
    name: "Category",
    type: "select",
    control: this.categoryControl,
    value: this.categories
  }

  public goalForm: FormGroup<GoalForm>;
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
      name: "Price and other",
      step: 1,
      fields: [
        {
          name: "Price",
          type: "number",
          control: this.priceControl,
        },
        {
          name: "Is Active",
          type: "checkbox",
          control: this.isActiveControl,
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
        category: this.categoryControl,
        price: this.priceControl,
        isActive: this.isActiveControl
      }
    );
  }

  public complete(form: FormGroup<GoalForm>) {
    const rawValue = form.getRawValue();
    const goalCreateRequest: GoalCreateRequest = {
      name: rawValue.name,
      price: rawValue.price,
      isActive: rawValue.isActive,
      categoryName: rawValue.category
    };
    this.goalService.createGoal(goalCreateRequest).subscribe(
      {
        next: () => {
          console.log('Goal created')
        }
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
