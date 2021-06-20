import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RatetermService {

  private baseURL = 'https://localhost:8080/api/Rateterm';

  constructor( private http: HttpClient ) { }

  createRateTerm(rateTerm: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, rateTerm);
  }

  updateRateTerm(id: number, rateTerm: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, rateTerm);
  }

  deleteRateTerm(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getAllRateTerms(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getRateTermById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`)
  }
}
