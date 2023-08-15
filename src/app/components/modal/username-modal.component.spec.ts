import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameModalComponent } from './username-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

describe('ModalComponent', () => {
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
});
