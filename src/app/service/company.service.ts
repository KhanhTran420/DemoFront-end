import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../model/company';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(API_URL + '/company');
  }

  saveCompany(company: FormData): Observable<Company> {
    return this.http.post<Company>(API_URL + '/company', company);
  }

  findById(id: number): Observable<Company> {
    return this.http.get<Company>(`${API_URL}/company/${id}`);
  }

  editCompany(id: number, company: FormData): Observable<Company> {
    return this.http.post<Company>(`${API_URL}/company/${id}`, company);
  }

  deleteCompany(id: number): Observable<Company> {
    return this.http.delete<Company>(`${API_URL}/company/${id}`);
  }
}
