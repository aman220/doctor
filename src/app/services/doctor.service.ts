import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Doctor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  email: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  appointment: any[];
}

interface ApiResponse {
  status: string;
  response: {
    count: number;
    records: Doctor[];
  };
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiUrl = 'http://3.111.71.63:4000/user/get';

  constructor(private http: HttpClient) {}

  getDoctors(searchString: string, role: string, page: string, limit: string): Observable<ApiResponse> {
    const body = {
      where: {
        searchString: searchString,
        role: role
      },
      page: page.toString(),
      limit: limit.toString()
    };
    return this.http.post<ApiResponse>(this.apiUrl, body);
  }
}
