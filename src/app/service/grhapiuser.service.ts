import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

/*behi enti fhemtni chnia bech taamel ou pas ?? ey regarde 

oki voila mais m loul matjich hakaka zayéd tawa telmouhem fhemtni chnia bech taamel ou pas ?? ey regarde 



oki mela voila kamel mela le travail demandé okiiii  ???
ey c simple 

*/


export class ApigrhapiuserService {
  baseUri: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create
  creategrhapiuser(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all grhapiusers
  getgrhapiusers() {
    return this.http.get(`${this.baseUri}`);
  }
  // Get grhapiuser
  getgrhapiuser(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update grhapiuser
  updategrhapiuser(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete grhapiuser
  deletegrhapiuser(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}


