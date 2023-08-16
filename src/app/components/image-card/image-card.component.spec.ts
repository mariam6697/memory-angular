import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardComponent } from './image-card.component';
import { SimpleChange } from '@angular/core';

describe('ImageCardComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCardComponent],
    });
    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide image on changes', () => {
    component.showImage = true;
    component.hideCard = true;
    component.ngOnChanges({ hideCard: new SimpleChange(null, true, true) });
    expect(component.showImage).toBeFalse();
  });

  it('should show image on click card', () => {
    spyOn(component.newFlipEvent, 'emit');
    component.showImage = false;
    component.blockFlipCard = false;
    component.clickCard();
    expect(component.showImage).toBeTrue();
    expect(component.newFlipEvent.emit).toHaveBeenCalled();
  });
});
