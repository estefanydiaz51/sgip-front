import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  isLoggedIn!: boolean;
  message = 'Por favor inicie sesión nuevamente';
  activateRouteSubsciption!: Subscription;
  url = '';

  constructor(
    private notificacionService: NzNotificationService,
    private routerService: Router,
    private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      this.notificacionService.warning('No tiene permitido acceder a esta sección, consulte con tecnología','Alerta');
      this.authService.generaLoading.next(true);
      setTimeout(() => {
        this.routerService.navigate(['signin']);
        this.authService.generaLoading.next(false);
        return false;
      }, 2000);
    }
  }
}
