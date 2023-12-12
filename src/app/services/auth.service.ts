import { Injectable } from '@angular/core';
import { LoginData, RegisterData } from '../interfaces/general.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  generaLoading = new BehaviorSubject<boolean>(false);
  generaLoading$ = this.generaLoading.asObservable();

  constructor(private httpService : HttpClient) { }

  login(loginData:LoginData): Observable<any> {
    return this.httpService.post<any>(environment.apiUrl+'/auth/login',loginData);
  }

  register(registerData:RegisterData): Observable<any> {
    return this.httpService.post<any>(environment.apiUrl+'/auth/register',registerData);
  }

  /**
   * Cierra sesión y elimina todos los datos de localstorage y session storage
   */
  logout(): void {
    //Limpiar cookies (si las hay)
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    // Limpiar local storage
    localStorage.clear();

    // Limpiar session storage
    sessionStorage.clear();
  }
}
