import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, ProjectRequest, PageResponse } from '../../shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects';

  constructor(private http: HttpClient) { }

  getProjects(name?: string, status?: string, page = 0, size = 10): Observable<PageResponse<Project>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', 'createdDate,desc');

    if (name) params = params.set('name', name);
    if (status) params = params.set('status', status);

    return this.http.get<PageResponse<Project>>(this.apiUrl, { params });
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  createProject(request: ProjectRequest): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, request);
  }

  updateProject(id: number, request: ProjectRequest): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${id}`, request);
  }

  updateProjectStatus(id: number, status: string): Observable<Project> {
    return this.http.patch<Project>(`${this.apiUrl}/${id}/status`, null, {
      params: { status }
    });
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
