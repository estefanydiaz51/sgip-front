import { Injectable } from '@angular/core';
import { LoginData, RegisterData } from '../interfaces/general.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService : HttpClient) { }

  login(loginData:LoginData): Observable<any> {
    return this.httpService.post<any>(environment.apiUrl+'/auth/login',loginData);
  }

  register(registerData:RegisterData): Observable<any> {
    return this.httpService.post<any>(environment.apiUrl+'/auth/register',registerData);
  }

}
