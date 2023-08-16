import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { ToastInfo } from '../models/toast.model';

const testToast = {} as ToastInfo;

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add toast to array', () => {
    service.toasts = [];
    service.show('test');
    expect(service.toasts.length).toBeGreaterThan(0);
  });

  it('should remove toast from array', () => {
    service.toasts = [testToast];
    service.remove(testToast);
    expect(service.toasts.length).toBe(0);
  });

  it('should clear all toasts', () => {
    service.toasts = [testToast];
    service.clear();
    expect(service.toasts.length).toBe(0);
  });
});
