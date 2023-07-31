import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterButtonComponent } from './twitter-button.component';

describe('TwitterButtonComponent', () => {
  let component: TwitterButtonComponent;
  let fixture: ComponentFixture<TwitterButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterButtonComponent]
    });
    fixture = TestBed.createComponent(TwitterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
