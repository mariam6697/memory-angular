import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameModalComponent } from './username-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

describe('UsernameModalComponent', () => {
  let component: UsernameModalComponent;
  let fixture: ComponentFixture<UsernameModalComponent>;

  // Spies declaration
  let spyActiveModal: jasmine.SpyObj<NgbActiveModal>;

  // Spies data
  spyActiveModal = jasmine.createSpyObj<NgbActiveModal>('NgbActiveModal', [
    'close',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsernameModalComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: NgbActiveModal,
          useValue: spyActiveModal,
        },
      ],
    });
    fixture = TestBed.createComponent(UsernameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal on click', () => {
    spyOn(component.newUsernameEvent, 'emit');
    component.usernameInput = 'Juanito';
    component.onClick();
    expect(component.newUsernameEvent.emit).toHaveBeenCalled();
    expect(spyActiveModal.close).toHaveBeenCalled();
  });
});
