import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OperatorReportFilterService} from '../service/operator-report-filter.service';




@Component({
  selector: 'app-operator-report-filter',
  templateUrl: './operator-report-filter.component.html',
  styleUrls: ['./operator-report-filter.component.scss'],
  providers: [OperatorReportFilterService]
})
export class OperatorReportFilterComponent implements OnInit {

  constructor(private  operatorReportFilterService: OperatorReportFilterService) {
  }

  reportData;
  optionDevices = [];
  optionWebs = [];
  optionDate = [];
  devicesButtonTitle = 'Device';
  webButtonTitle = 'Web';
  dateButtonTitle = 'Dates'
  dateOptionComponent = 'list';
  jsonFilter = { device: null, web: null , startDate: null, endDate: null};

  @Output() filterOptions = new EventEmitter();

  ngOnInit() {
    this.getOperationReportFilter();
  }

  private getOperationReportFilter() {
    this.operatorReportFilterService.getOperatorReportFilterHtml().subscribe(Success.bind(this), Error.bind(this), Complited.bind(this));

    function Success(data) {
      this.reportData = data;
      this.setDevicesOption(data);
      this.setWebsOption(data);
      this.setDateOption(data);
    }

    function Error(err) {
      alert(err);
    }

    function Complited(data) {
      //
    }
  }

  setDevicesOption(data) {
    // format:[ {id value}]
    this.optionDevices =   data.Devices.map((val) => new Object({id: val.Name , name: val.Name}));
  }


  setWebsOption(data) {
    // format:[ {id value}]
    this.optionWebs = data.WebSite.map((val) => new Object({id:  val, name: val}));
  }

  setDateOption(data) {
    this.optionDate = data.DateModels.map((val) => new Object({ id: {startDate: val.startDate, endDate: val.endDate} , name: val.name}));
  }
  selectedDevices(option) {
    //this.optionDevices = option.WebSite((val) => new Object({id: val.VisitorID , name: val.Name}));
    if(option) { this.jsonFilter.device = option.id; }
    else { this.jsonFilter.device = null; }
  }

  selectedWebs(option) {
    //this.optionDevices = option.WebSite((val) => new Object({id: val.VisitorID , name: val.Name}));
    if(option) { this.jsonFilter.web = option.id; }
    else { this.jsonFilter.web = null; }
  }

  selectedDate(options) {
    if ( options) { this.jsonFilter.startDate = this.parseDate(options.id.startDate); this.jsonFilter.endDate = this.parseDate(options.id.endDate); }
    else { this.jsonFilter.startDate = null; this.jsonFilter.endDate = null; }
  }

  selectedDateCalendar(option) {
    if (option) { this.jsonFilter.startDate = this.parseDate(option.startDate); this.jsonFilter.endDate = this.parseDate(option.endDate); }
    else { this.jsonFilter.startDate = null; this.jsonFilter.endDate = null; }
  }

  sendFilterSelections() {
    this.filterOptions.emit(this.jsonFilter);
  }

  searcheClicked() {
    this.sendFilterSelections();
  }

  parseDate(dateParse){
    if(dateParse) {
      let date = new Date(dateParse);

      let day = date.getDate();           // yields
      let dayString = day.toString();
      if(day<10){
        dayString = '0' + day;
      }
      let month = date.getMonth() + 1;

      // yields month
      let monthString = month.toString();
      if(month<10){
        monthString = '0' + month;
      }
      let year = date.getFullYear();      // yields year
      let hour = date.getHours();         // yields hours
      let minute = date.getMinutes();     // yields minutes
      let second = date.getSeconds();     // yields seconds

// After this construct a string with the above results as below
      return dayString + '/' + monthString + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    }else{
      return null;
    }
  }


}
