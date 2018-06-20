import { TestBed, inject } from '@angular/core/testing';

import { OperatorReportFilterService } from './operator-report-filter.service';

describe('OperatorReportFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorReportFilterService]
    });
  });

  it('should be created', inject([OperatorReportFilterService], (service: OperatorReportFilterService) => {
    expect(service).toBeTruthy();
  }));
});
