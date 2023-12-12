import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private httpService : HttpClient) { }

  getCohorts(): Observable<any> {
    return this.httpService.get<any>(environment.apiUrl+'/consult/cohorts');
  }

  getStudents(): Observable<any> {
    return this.httpService.get<any>(environment.apiUrl+'/consult/students');
  }

  getPrograms(): Observable<any> {
    return this.httpService.get<any>(environment.apiUrl+'/consult/programs');
  }

  getTeachers(): Observable<any> {
    return this.httpService.get<any>(environment.apiUrl+'/consult/teachers');
  }

  getCoordinators(): Observable<any> {
    return this.httpService.get<any>(environment.apiUrl+'/consult/coordinators');
  }

}
