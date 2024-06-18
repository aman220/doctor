import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://3.111.71.63:4000/patient/get';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<any> {
    return this.http.post<any>(this.apiUrl ,{});
  }
}
