import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorReportFilterComponent } from './operator-report-filter.component';

describe('OperatorReportFilterComponent', () => {
  let component: OperatorReportFilterComponent;
  let fixture: ComponentFixture<OperatorReportFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorReportFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorReportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
