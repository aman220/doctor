// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // app module main inject kr diya hai yha se 
})
export class SignupService {
  private apiUrl = 'http://3.111.71.63:4000/user/add';

  constructor(private http: HttpClient) { } // jab bhi mere object class ka instance banega tb usko http client ka instance chaiye hoga

  signup(userDetails: Object): Observable<any> {
   
    return this.http.post<any>(this.apiUrl, userDetails);
  }
}
