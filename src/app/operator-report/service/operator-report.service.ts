import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SERVER_API_URL} from '../../app.constants';

@Injectable()
export class OperatorReportService {

  constructor(private http: HttpClient) { }


  getOperatorReportHtml(queries?: any): Observable<object> {
    const path = SERVER_API_URL + 'OperatorReport';

    const params = new HttpParams({
      fromObject: {
        param1: 'value1',
        param2: 'value2',
      }
    });

    return this.http.get(path , { params: queries} ); //
  }

}
