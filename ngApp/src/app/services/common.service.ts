import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable()
export class CommonService {
  commonUrl = 'https://api.smartrecruiters.com/v1/companies/smartrecruiters/';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CommonService');
  }

  getDepartments(): Observable<any> {
    
    return this.http.get<[]>(`${this.commonUrl}/departments`)
      .pipe(
        catchError(this.handleError('getDepartments', []))
      );
  }

}
