import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';

@Injectable()
export class PostingsService {
  postingsUrl = 'https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PostingsService');
  }

  getPostings(filters): Observable<any[]> {

    let filterUrl = Object.entries(filters).reduce((url: string, filter: any) => {

      return `${url}${filter[0]}=${filter[1]}&`;

    }, '?')

    return this.http.get<[]>(this.postingsUrl + filterUrl)
      .pipe(
        catchError(this.handleError('getPostings', []))
      );
  }

  getPosting(id: string): Observable<any> {
    
    return this.http.get<[]>(`${this.postingsUrl}/${id}`)
      .pipe(
        catchError(this.handleError('getPostings', []))
      );
  }

}
