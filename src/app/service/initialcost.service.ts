import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialcostService {

  private baseURL = 'https://localhost:8080/api/Initialcost';

  constructor( private http: HttpClient ) { }

  getInitialcostList(): Observable<any>{
    return this.http.get(`${this.baseURL}`)
  }
}
