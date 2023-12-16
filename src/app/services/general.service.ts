import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cohort, Program, Student, Teacher } from '../interfaces/general.interfaces';

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

  createCohort(cohort:Cohort): Observable<Cohort> {
    return this.httpService.post<Cohort>(environment.apiUrl+'/create/cohort',cohort);
  }

  createStudent(student:Student): Observable<Student> {
    return this.httpService.post<Student>(environment.apiUrl+'/create/students',student);
  }

  createProgram(program:Program): Observable<Program> {
    return this.httpService.post<Program>(environment.apiUrl+'/create/program',program);
  }

  createtTeacher(teacher:Teacher): Observable<Teacher> {
    return this.httpService.post<Teacher>(environment.apiUrl+'/create/teacher',teacher);
  }

  createCoordinator(coordinator:any): Observable<any> {
    return this.httpService.post<any>(environment.apiUrl+'/create/coordinator',coordinator);
  }

  updateCohort(cohort:Cohort): Observable<Cohort> {
    return this.httpService.post<Cohort>(environment.apiUrl+'/update/cohort',cohort);
  }

  updateStudent(student:Student): Observable<Student> {
    return this.httpService.post<Student>(environment.apiUrl+'/update/students',student);
  }

  updateProgram(program:Program): Observable<Program> {
    return this.httpService.post<Program>(environment.apiUrl+'/update/program',program);
  }

  updateTeacher(teacher:Teacher): Observable<Teacher> {
    return this.httpService.post<Teacher>(environment.apiUrl+'/update/teacher',teacher);
  }

  updateCoordinator(coordinator:any): Observable<any> {
    return this.httpService.post<any>(environment.apiUrl+'/update/coordinator',coordinator);
  }


}
