import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerStartEndComponent } from './date-picker-start-end.component';

describe('DatePickerStartEndComponent', () => {
  let component: DatePickerStartEndComponent;
  let fixture: ComponentFixture<DatePickerStartEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerStartEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerStartEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
