import {FormControl} from "@angular/forms";
import {FormValidator} from "./form-validator.model";

export class FormField {
  name: string;
  type: 'text' | 'number' | 'select';
  control: FormControl<string>;
  value?: any;
  validators?: FormValidator[];
}
