import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalData } from './modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private http: HttpClient) {}

  getModalData(url: string): Observable<ModalData> {
    return this.http.get<ModalData>(url);
  }
}
