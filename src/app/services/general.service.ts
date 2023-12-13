import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cohort, Program } from '../interfaces/general.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private httpService : HttpClient) { }

  getCohorts(): Observable<Cohort[]> {
    return this.httpService.get<Cohort[]>(environment.apiUrl+'/consult/cohorts');
  }

  getStudents(): Observable<any> {
    return this.httpService.get<any>(environment.apiUrl+'/consult/students');
  }

  getPrograms(): Observable<Program[]> {
    return this.httpService.get<Program[]>(environment.apiUrl+'/consult/programs');
  }

  getTeachers(): Observable<any> {
    return this.httpService.get<any>(environment.apiUrl+'/consult/teachers');
  }

  getCoordinators(): Observable<any> {
    return this.httpService.get<any>(environment.apiUrl+'/consult/coordinators');
  }

}
