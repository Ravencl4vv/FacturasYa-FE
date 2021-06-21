import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseURL = 'https://facturasya.herokuapp.com/api/operations';

  constructor( private http: HttpClient ) { }

  getInvoiceList(): Observable<any>{
    return this.http.get(`${this.baseURL}`)
  }
}
