import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ImagesService } from './images.service';

describe('ImagesService', () => {
  let service: ImagesService;
  let spyHttpClient: jasmine.SpyObj<HttpClient>;

  spyHttpClient = jasmine.createSpyObj('HttpClient', ['post', 'get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: spyHttpClient }],
    });
    service = TestBed.inject(ImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an http get request for images', () => {
    service.getImages();
    expect(spyHttpClient.get).toHaveBeenCalledTimes(1);
  });
});
