import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {ItemForm} from "./item.form";

export interface PurchaseForm {
  name: FormControl<string>;
  shop: FormControl<string>;
  dateTime: FormControl<string>;
  items: FormArray<FormGroup<ItemForm>>;
}
