import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {ToastEvents} from "../../../payload/model/toast/toast-events.enum";
import {Toast} from "bootstrap";
import {fromEvent, take} from "rxjs";

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
  public types: typeof ToastEvents = ToastEvents;
  private toast: Toast;

  ngOnInit(): void {
    this.show();
  }

  private show() {
    this.toast = new Toast(this.toastElements.nativeElement);
    fromEvent(this.toastElements.nativeElement, 'hidden.bs.toast')
      .pipe(take(1))
      .subscribe(() => this.hide());
    this.toast.show();
  }

  hide() {
    this.toast.dispose();
    this.disposeEvent.emit();
  }
}
