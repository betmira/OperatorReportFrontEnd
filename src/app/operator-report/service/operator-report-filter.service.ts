import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OperatorReportFilterService {

  constructor(private http: HttpClient) { }

  getOperatorReportFilterHtml(): Observable<object> {
    const path = SERVER_API_URL + 'OperatorReportFilter';
    return this.http.get(path); //
  }

}
