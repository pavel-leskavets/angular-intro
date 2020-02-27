import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInfoCardComponent } from './full-info-card.component';

describe('FullInfoCardComponent', () => {
  let component: FullInfoCardComponent;
  let fixture: ComponentFixture<FullInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
