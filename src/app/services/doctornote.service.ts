import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorNotesService {
  private apiUrl = 'http://3.111.71.63:4000/comment/add';

  constructor(private http: HttpClient) {}

  addDoctorNote(patientId: string, doctorNote: string): Observable<any> {
    const body = {
      patient_id: patientId,
      comment: doctorNote,
      comment_type: 'Doctor'
    };
    return this.http.post<any>(this.apiUrl, body);
  }
}
