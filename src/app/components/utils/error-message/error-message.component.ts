import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit, OnChanges {

  @Input('control') formControl: AbstractControl;

  ngOnInit(): void {
    this.getErrorsForFormControl()
  }

  private getErrorsForFormControl() {
    if (this.formControl.errors && this.formControl.touched) {
      console.log('test')
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
