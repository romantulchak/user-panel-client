import {FormControl} from "@angular/forms";
import {FormValidator} from "./form-validator.model";

export class FormField {
  name: string;
  type: 'text' | 'number';
  control: FormControl<string>;
  validators?: FormValidator[];
}
