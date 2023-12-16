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
import { GeneralService } from '../services/general.service';
import { UserData } from '../interfaces/general.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(
    private generalService : GeneralService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

    let userData = this.generalService.userData.getValue();
    if(!userData){
      this.generalService.getUSer().subscribe(res=>{
        this.generalService.userData.next(res);
        userData = res;
        return this.isAdmin(res);
      });
    }else{
      return this.isAdmin(userData);
    }
  }

  isAdmin(userData : UserData) : boolean {
    if(userData.role==='administrador'){
      return true;
    }else{
      return false;
    }
  }
}
