import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ToastEvent} from "../../../payload/model/toast/toast-event.model";
import {ToastService} from "../../../services/toast.service";

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  public toasts: ToastEvent[] = [];

  constructor(private toastService: ToastService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscribeToToasts();
  }

  private subscribeToToasts(): void {
    this.toastService.toastEvents.subscribe(toasts => {
      const toast: ToastEvent = {
        title: toasts.title,
        message: toasts.message,
        type: toasts.type
      };

      this.toasts.push(toast);
      this.cdr.detectChanges();
    })
  }

  private dispose(index: number) {
    this.toasts.slice(index, 1);
    this.cdr.detectChanges();
  }
}
