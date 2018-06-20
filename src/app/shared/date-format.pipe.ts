import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let date;
    try{
      return super.transform(value, Constants.DATE_FMT);
    }
    catch (e) {
      return '';
    }
    //return super.transform(value, Constants.DATE_FMT);
  }
}

export class Constants {
  static readonly DATE_FMT = 'dd/mm/yyyy';
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss`;
}
