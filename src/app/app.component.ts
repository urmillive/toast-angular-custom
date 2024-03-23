import { Component } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toast-position';

  constructor(private _toastService: ToastService) {}
  onClick() {
    this._toastService.show('Hello, World!', 'topLeft');
    setTimeout(() => {
      this._toastService.show('after sometime this', 'topRight');
    }, 2000);
    setTimeout(() => {
      this._toastService.show('after sometime this', 'bottomRight');
    }, 2000);
    setTimeout(() => {
      this._toastService.show('after sometime this', 'topLeft');
    }, 2000);
  }
}
