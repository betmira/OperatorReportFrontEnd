import { Component, OnInit } from '@angular/core';
import {OperatorReportService} from './service/operator-report.service';
import {OperatorReportFilterService} from './service/operator-report-filter.service';

@Component({
  selector: 'app-operator-report',
  templateUrl: './operator-report.component.html',
  styleUrls: ['./operator-report.component.scss']

})
export class OperatorReportComponent implements OnInit {


  rowData ;
  columnDefs;
  gridApi;
  gridColumnApi;

  constructor(private operatorReportService: OperatorReportService) {
    this.columnDefs = [
      {headerName: 'S.No.', field: 'ID' , width : 100},
      {headerName: 'Operator Name', field: 'Name'},
      {headerName: 'Proactive Sent', field: 'ProactiveSent' },
      {headerName: 'Proactive Answered', field: 'ProactiveAnswered'},
      {headerName: 'Proactive Response Rate', field: 'ProactiveResponseRate' , valueFormatter: percentFormatter},

      {headerName: 'ReactiveReceived', field: 'ReactiveReceived'},
      {headerName: 'Reactive Answered', field: 'ReactiveAnswered'},
      {headerName: 'Reactive Response Rate', field: 'ReactiveResponseRate', valueFormatter: percentFormatter },
      {headerName: 'Total Chat Length', field: 'TotalChatLength'},
      {headerName: 'Average Chat Length', field: 'AverageChatLength', width: 100},
    ];

    function  percentFormatter(params) {
      return params.value + '%';
    }
  }

  ngOnInit() {
    this.getOperationreport({ device: null, web: null , startDate: null, endDate: null});
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  private getOperationreport(params) {
   this.operatorReportService.getOperatorReportHtml(params).subscribe( Success.bind(this) , Error.bind(this), Complited.bind(this) );

  function Success(data: object) {
    this.rowData = data['OperatorProductivity'];
  }

  function Error(err) {
    alert(err);
  }

  function Complited(data) {
    //
  }
  }

  resultFilters(jsonFilter) {
    this.getOperationreport(jsonFilter);
    this.exportExcel();
  }

  exportExcel(){
    debugger;
    let params = {
      skipHeader: false,
      skipFooters: true,
      skipGroups: true,
      fileName: 'export.xls',
      columnGroups: false,
      skipPinnedTop: true,
      skipPinnedBottom: true,
      allColumns: true,
      onlySelected: false,
      sheetName: 'Report'
    }
    this.gridApi.exportDataAsCsv(params);
  }




}
