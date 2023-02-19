import {ToastEvents} from "./toast-events.enum";

export interface ToastEvent {
  title: string;
  message: string;
  type: ToastEvents;
}
