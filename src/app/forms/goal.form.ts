import {FormControl} from "@angular/forms";

export interface GoalForm {
  name: FormControl<string>;
  price: FormControl<number>;
  isActive: FormControl<boolean>;
  category: FormControl<string>;
}
