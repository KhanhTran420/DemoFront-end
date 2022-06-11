import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../model/company';
import {environment} from '../../environments/environment';
import {Recruitment} from '../model/recruitment';
import {HttpClient} from '@angular/common/http';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Recruitment[]> {
    return this.http.get<Recruitment[]>(API_URL + '/recruitment/list');
  }

  saveRecruitment(recruitment: FormData): Observable<Recruitment> {
    return this.http.post<Recruitment>(API_URL + '/recruitment', recruitment);
  }

  findById(id: number): Observable<Recruitment> {
    return this.http.get<Recruitment>(`${API_URL}/recruitment/${id}`);
  }

  editRecruitment(id: number, recruitment: FormData): Observable<Recruitment> {
    return this.http.post<Recruitment>(`${API_URL}/recruitment/${id}`, recruitment);
  }

  deleteRecruitment(id: number): Observable<Recruitment> {
    return this.http.delete<Recruitment>(`${API_URL}/recruitment/${id}`);
  }

}
