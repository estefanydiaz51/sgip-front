import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {RouterModule} from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AuthService } from './services/auth.service';
import { LoadingScreenComponent } from '../shared/loadingScreen/loadingScreen.component';
import { GeneralService } from './services/general.service';
import { UserData } from './interfaces/general.interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NzIconModule, 
    NzLayoutModule, 
    NzMenuModule, 
    RouterModule, 
    NzDropDownModule, 
    NzDividerModule,
    LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  year = new Date().getFullYear();
  title = '';
  showLayout = true;
  loading = false;
  userData !: UserData;

  constructor(private router: Router, private authService : AuthService, private generalService : GeneralService){
    
    this.router.events.subscribe((val: any) => {
      let url = '';
      if(val){
        if(val.url){
          url = val.url;
        }
        if(val.routerEvent){
          url = val.routerEvent.urlAfterRedirects;
        }
        if(val.urlAfterRedirects){
          url = val.urlAfterRedirects;
        }
      }
      if ((url && val instanceof NavigationEnd) || (url && val instanceof NavigationStart)) {
        let baseUrl = url.split('?')[0]; // remueve todos los posibles parámetros de la url antes de ser analizada
        switch (baseUrl) {
          case '/home':
            this.title = 'Bienvenido';
            this.showLayout = true;
            break;
          case '/cohorts':
            this.title = 'Cohortes';
            this.showLayout = true;
            break;
          case '/teachers':
            this.title = 'Docentes';
            this.showLayout = true;
            break;
          case '/programs':
            this.title = 'Programas';
            this.showLayout = true;
            break;
          case '/students':
            this.title = 'Estudiantes';
            this.showLayout = true;
            break;
          case '/signin':
            this.title = 'Estudiantes';
            this.showLayout = false;
            break;
          case '/signup':
            this.title = 'Estudiantes';
            this.showLayout = false;
            break;
          case '/coordinators':
            this.title = 'Coordinadores';
            this.showLayout = true;
            break;
          default:
            this.title = '';
            break;
        }
      }
    });

    this.authService.generaLoading$.subscribe(res=>{
      this.loading = res;
    });

    this.authService.generaLoading$.subscribe(res=>{
      this.loading = res;
    });
  }

  ngOnInit(): void {

    let userData = this.generalService.userData.getValue();

    if(!userData){
      this.generalService.getUSer().subscribe(res=>{
        this.generalService.userData.next(res);
        this.userData = res;
      });
    }
    
  }

  signOut(): void {
    this.authService.logout();
    this.router.navigate(['signin']);
  }
}
