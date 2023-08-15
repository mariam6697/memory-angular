import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { SimpleChange } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;
  let spyToastService: jasmine.SpyObj<ToastService>;

  spyToastService = jasmine.createSpyObj('ToastService', ['show']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameBoardComponent, LoadingSpinnerComponent],
      providers: [
        {
          provide: ToastService,
          useValue: spyToastService,
        },
      ],
    });
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create cards on changes', () => {
    spyOn(component, 'createCards');
    component.ngOnChanges({ imagesList: new SimpleChange(null, [], true) });
    expect(component.createCards).toHaveBeenCalled();
  });

  it('should add animal to temp var and check match', () => {
    spyOn(component, 'checkCardMatch');
    component.tempAnimals = [];
    component.getFlipCard('bear');
    expect(component.tempAnimals).toEqual(['bear']);
    expect(component.checkCardMatch).toHaveBeenCalled();
  });

  it('should check and not find a match', fakeAsync(() => {
    component.errorCounter = 0;
    component.savedAnimals = [];
    component.tempAnimals = ['cat', 'bear'];
    component.checkCardMatch();
    expect(component.savedAnimals).toEqual([]);
    expect(component.errorCounter).toEqual(1);
    expect(spyToastService.show).toHaveBeenCalled();
    tick(2000);
    expect(component.blockGame).toBeFalse();
    expect(component.forceHideCards).toBeTrue();
  }));

  it('should check and find a match', () => {
    component.successCounter = 0;
    component.savedAnimals = [];
    component.tempAnimals = ['cat', 'cat'];
    component.checkCardMatch();
    expect(component.savedAnimals).toEqual(['cat']);
    expect(component.successCounter).toEqual(1);
    expect(spyToastService.show).toHaveBeenCalled();
  });

  it('should check if animal is saved', () => {
    component.savedAnimals = ['cat'];
    expect(component.isAnimalSaved('cat')).toBeTrue();
  });
});
