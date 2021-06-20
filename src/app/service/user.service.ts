import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'https://localhost:8080/api/User';

  constructor( private http: HttpClient ) { }

  createUser(user: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, user);
  }

  updateUser(id: number, user: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  // ESTA NO ESTOY SEGURO
  getAllUsers(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getUserById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`)
  }

  getUserByUsername(username: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/${username}`)
  }

}
