import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private baseURL = 'https://localhost:8080/api/Operation';

  constructor( private http: HttpClient ) { }

  getOperationList(): Observable<any>{
    return this.http.get(`${this.baseURL}`)
  }
}
