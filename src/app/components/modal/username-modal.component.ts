import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-username-modal',
  templateUrl: './username-modal.component.html',
  styleUrls: ['./username-modal.component.scss'],
})
export class UsernameModalComponent {
  @Output() newUsernameEvent = new EventEmitter<string>();
  public usernameInput: string = '';
  constructor(public readonly activeModal: NgbActiveModal) {}

  onClick = (): void => {
    // Double check on username input
    if (this.usernameInput.length > 3) {
      this.newUsernameEvent.emit(this.usernameInput);
      this.activeModal.close();
    }
  };
}
