import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-error-message[control][name]',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Input('control') formControl: FormControl;
  @Input('name') name: string;
  public isShowError: boolean = false;

  ngOnInit(): void {
    this.getErrorsForFormControl()
  }

  private getErrorsForFormControl() {
    this.formControl.statusChanges.subscribe(it => {
      console.log(this.formControl.touched)
        this.isShowError = it === 'INVALID' && this.formControl.dirty;
    })
  }
}
