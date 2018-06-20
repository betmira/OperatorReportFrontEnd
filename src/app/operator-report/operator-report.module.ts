import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OperatorReportComponent } from './operator-report.component';
import { OperatorReportFilterComponent } from './operator-report-filter/operator-report-filter.component';
import {OperatorReportService} from './service/operator-report.service';
import {OperatorReportFilterService} from './service/operator-report-filter.service';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
   // NgbModule.forRoot()
    AgGridModule.withComponents([/*optional Angular Components to be used in the grid*/]),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  declarations: [OperatorReportComponent, OperatorReportFilterComponent],
  exports: [OperatorReportComponent],
  providers: [OperatorReportService, OperatorReportFilterService ]
})
export class OperatorReportModule { }
