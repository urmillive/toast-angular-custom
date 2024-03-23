import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  constructor(private _toastService: ToastService) {}
  toasts: any[] = [];
  uniquePositions: string[] = [];

  ngOnInit(): void {
    this._toastService.toast$.subscribe((res) => {
      this.toasts = res;
      this.uniquePositions = this.getUniquePositions(res);
    });
  }

  getUniquePositions(toasts: any[]): string[] {
    const positions = toasts.map((toast) => toast.position);
    return Array.from(new Set(positions));
  }

  getToastsByPosition(position: string): any[] {
    return this.toasts.filter((toast) => toast.position === position);
  }

  getToastClasses(position: string) {
    return {
      'top-left': position === 'topLeft',
      'top-right': position === 'topRight',
      'bottom-left': position === 'bottomLeft',
      'bottom-right': position === 'bottomRight',
    };
  }
}
