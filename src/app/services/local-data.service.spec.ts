import { TestBed } from '@angular/core/testing';

import { LocalDataService } from './local-data.service';

describe('LocalDataService', () => {
  let service: LocalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should write and read data', () => {
    service.writeData('key', 'value');
    expect(service.readData('key')).toEqual('value');
  });

  it('should write and remove data', () => {
    service.writeData('key', 'value');
    service.deleteData('key');
    expect(service.readData('key')).toBeNull();
  });
});
