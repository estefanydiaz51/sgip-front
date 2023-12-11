import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {RouterModule} from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, RouterModule, NzDropDownModule, NzDividerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  year = new Date().getFullYear();
  title = '';

  constructor(private router: Router){
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
            break;
          case '/cohorts':
            this.title = 'Cohortes';
            break;
          case '/teachers':
            this.title = 'Docentes';
            break;
          case '/programs':
            this.title = 'Programas';
            break;
          case '/students':
            this.title = 'Estudiantes';
            break;
          default:
            this.title = '';
            break;
        }
      }
    });
  }
}
