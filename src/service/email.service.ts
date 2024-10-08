import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // private apiUrl = 'http://localhost:4500/api/email/send';
  private apiUrl = 'https://vihaancrackersbackend-50022550740.development.catalystappsail.in/api/email/send';


  constructor(private http: HttpClient) {}

  sendEmail(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
