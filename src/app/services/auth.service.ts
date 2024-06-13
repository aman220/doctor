// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // app module main inject kr diya hai yha se 
})
export class AuthService {
  private apiUrl = 'https://3.111.71.63:4000/user/get';

  constructor(private http: HttpClient) { } // jab bhi mere object class ka instance banega tb usko http client ka instance chaiye hoga

  login(userCreds: Object): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, userCreds, { headers });
  }
}
