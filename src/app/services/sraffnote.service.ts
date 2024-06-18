import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffNotesService {
  private apiUrl = 'http://3.111.71.63:4000/comment/add';

  constructor(private http: HttpClient) {}

  addSraffNote(patientId: string, comment: string): Observable<any> {
    const body = {
      patient_id: patientId,
      comment: comment,
      comment_type: 'Staff'
    };
    return this.http.post<any>(this.apiUrl, body);
  }
}
