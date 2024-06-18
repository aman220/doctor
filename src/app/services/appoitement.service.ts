import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://3.111.71.63:4000/appointment/add';

  constructor(private http: HttpClient) { }

  addAppointment(appointmentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, appointmentData);
  }
}
