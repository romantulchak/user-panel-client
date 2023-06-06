import {FormControl} from "@angular/forms";

export interface ItemForm {
  name: FormControl<string>;
  price: FormControl<number>;
  amount: FormControl<number>;
}
