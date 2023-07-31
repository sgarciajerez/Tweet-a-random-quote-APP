import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesBoxComponent } from './quotes-box.component';

describe('QuotesBoxComponent', () => {
  let component: QuotesBoxComponent;
  let fixture: ComponentFixture<QuotesBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesBoxComponent]
    });
    fixture = TestBed.createComponent(QuotesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
