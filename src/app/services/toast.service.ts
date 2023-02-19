import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {ToastEvent} from "../payload/model/toast/toast-event.model";
import {ToastEvents} from "../payload/model/toast/toast-events.enum";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toastEvents: Observable<ToastEvent>
  private events = new Subject<ToastEvent>()

  constructor() {
    this.toastEvents = this.events.asObservable();
  }

  showSuccess(title: string, message: string) {
    this.events.next({
      title,
      message,
      type: ToastEvents.Success
    })
  }


}
