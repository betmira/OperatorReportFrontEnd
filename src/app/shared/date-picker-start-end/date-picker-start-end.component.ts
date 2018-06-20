import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import * as moment from 'moment/moment';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
@Component({
  selector: 'app-date-picker-start-end',
  templateUrl: './date-picker-start-end.component.html',
  styleUrls: ['./date-picker-start-end.component.scss']
})
export class DatePickerStartEndComponent implements OnInit {


  hoveredDate: NgbDateStruct;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  fromDateInput = null;
  toDateInput = null;
  calendarr;

  @Output() selectedDate = new EventEmitter();

  ngOnInit() {
  }


  constructor(calendar: NgbCalendar) {
    this.calendarr = calendar;
    // this.fromDate = calendar.getToday();
    // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    // this.fromDateInput = new Date(this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day);
    // this.toDateInput = new Date(this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day);
  }

  onDateSelection(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.fromDateInput = new Date(this.fromDate.year + '-' + this.fromDate.month + '-'+ this.fromDate.day);
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
      this.toDateInput = new Date(this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day);

    } else {
      this.toDate = null;
      this.toDateInput = null;
      this.fromDate = date;
      this.fromDateInput = new Date(this.fromDate.year + '-' + this.fromDate.month + '-'+ this.fromDate.day);
    }
    this.selectedDate.emit(this.getDateFroTo());
  }

  newDateFrom(newdate){
    this.fromDate = null;
    this.fromDateInput = null;
     let date = new Date(newdate.target.value);
      // if (Object.prototype.toString.call(date) === "[object Date]") {
      //   if (isNaN(date.getTime()) == false){
    if (Object.prototype.toString.call(date) === "[object Date]") {
      if (isNaN(date.getTime()) == false) {
       // if(date != 'Invalid Date'){
         // date.getDay()  dosn't work correctly !!!!!!!!!!!!
         this.fromDate = {year: date.getFullYear(), month: date.getMonth() + 1 , day: date.getDate()};
         this.fromDateInput = newdate.target.value;
        }
     }
    let dates = this.getDateFroTo();
    this.selectedDate.emit(dates);
  }

  newDateTo(newdate){
    this.toDate = null;
    this.toDateInput = null;
    let date = new Date(newdate.target.value);
    if (Object.prototype.toString.call(date) === "[object Date]") {
      if (isNaN(date.getTime()) == false) {
        // date.getDay()  dosn't work correctly !!!!!!!!!!!!
        this.toDate = {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
        this.toDateInput = newdate.target.value;
      }
    }
    this.selectedDate.emit(this.getDateFroTo());
  }

  getDateFroTo() {
    let fromDateTime = null;
    if (this.fromDateInput) {
        fromDateTime = moment( new Date(this.fromDateInput).setHours(0, 0, 0 )).format('YYYY-MM-DD  HH:mm:ss');
    }

    let toDateTime = null;
    if(this.toDateInput) {
      toDateTime =  moment(new Date(this.toDateInput ).setHours(23, 59, 59)).format('YYYY-MM-DD  HH:mm:ss');//.toString('yyyy-MM-dd HH:mm:ss Z');
    }

    return {startDate:  fromDateTime, endDate: toDateTime };

  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

}
