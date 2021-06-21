import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private baseURL = 'https://facturasya.herokuapp.com/api/operations';
  private postURL = 'https://facturasya.herokuapp.com/api/users';

  constructor( private http: HttpClient ) { }

  createOperation(operation: Object, userId: number, rateTermId: number): Observable<Object>{
    return this.http.post(`${this.postURL}/${userId}/rateTerms/${rateTermId}/operations`, operation);
  }

  updateOperation(id: number, operation: Object, userId: number, rateTermId: number) : Observable<any>{
    return this.http.put(`${this.postURL}/${userId}/rateTerms/${rateTermId}/operations/${id}`, operation);
  }

  deleteOperation(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  // ESTA NO ESTOY SEGURO
  getAllOperations(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }
}
