import {FormField} from "./form-field.model";

export interface FormStep {
  name: string;
  step: number;
  fields: FormField[];
}
