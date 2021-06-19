import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FinalcostService {

  private baseURL = 'https://localhost:8080/api/Finalcost';

  constructor( private http: HttpClient ) { }

  getFinalcostList(): Observable<any>{
    return this.http.get(`${this.baseURL}`)
  }
}
