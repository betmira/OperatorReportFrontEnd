import { TestBed, inject } from '@angular/core/testing';

import { OperatorReportService } from './operator-report.service';

describe('OperatorReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorReportService]
    });
  });

  it('should be created', inject([OperatorReportService], (service: OperatorReportService) => {
    expect(service).toBeTruthy();
  }));
});
