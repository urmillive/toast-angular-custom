import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  private toastArr = new BehaviorSubject<
    { message: string; position: string }[]
  >([]);
  toast$ = this.toastArr.asObservable();

  show(message: string, position: string) {
    const currentToast = this.toastArr.getValue();
    const updatedToast = [...currentToast, { message, position }];
    this.toastArr.next(updatedToast);
  }
}
