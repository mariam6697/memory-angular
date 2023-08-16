import { Component, TemplateRef } from '@angular/core';
import { ToastInfo } from 'src/app/models/toast.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  host: {
    class: 'toast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200',
  },
})
export class ToastsComponent {
  constructor(public toastService: ToastService) {}

  isTemplate = (toast: ToastInfo): boolean => {
    return toast.textOrTpl instanceof TemplateRef;
  };
}
