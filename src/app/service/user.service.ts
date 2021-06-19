import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'https://localhost:8080/api/User';

  constructor( private http: HttpClient ) { }

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseURL}`)
  }
}