import { TemplateRef } from '@angular/core';

export interface ToastInfo {
  classname: any;
  textOrTpl: TemplateRef<any> | null;
  header: string;
  body: string;
  delay?: number;
}

// From https://ng-bootstrap.github.io/#/components/toast/overview
