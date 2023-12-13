import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token');
  let newRequest = req.clone({ setHeaders: { Authorization: `${token}` } });
  return next(newRequest);
};

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = localStorage.getItem('token');
    console.log('token : ', token);
    
    let newRequest = request.clone({ setHeaders: { token: `${token}` } });

    return next.handle(newRequest);
  }
}
