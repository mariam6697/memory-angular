import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import ICONS from 'src/app/constants/icons.constants';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  constructor(private readonly sanitizer: DomSanitizer) {}

  get spinnerSvg(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(`${ICONS.SPINNER}`);
  }
}
