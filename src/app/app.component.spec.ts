import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ImagesService } from './services/images.service';

describe('AppComponent', () => {
  let spyImagesService: jasmine.SpyObj<ImagesService>;

  spyImagesService = jasmine.createSpyObj('ImagesService', ['getImages']);

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ImagesService, useValue: spyImagesService }],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
