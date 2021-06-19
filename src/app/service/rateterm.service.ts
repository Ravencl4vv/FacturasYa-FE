import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RatetermService {

  private baseURL = 'https://localhost:8080/api/Rateterm';

  constructor( private http: HttpClient ) { }

  getRatetermList(): Observable<any>{
    return this.http.get(`${this.baseURL}`)
  }
}
