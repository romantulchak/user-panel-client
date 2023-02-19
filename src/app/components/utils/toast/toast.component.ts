import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter, Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {ToastEvents} from "../../../payload/model/toast/toast-events.enum";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit {

  @ViewChild('toastElement', {static: true})
  public toastElements: ElementRef;
  @Output() disposeEvent = new EventEmitter();
  @Input() title: string;
  @Input() message: string;
  @Input() type: ToastEvents;

  ngOnInit(): void {

  }

}
