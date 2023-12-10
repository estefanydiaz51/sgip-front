import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  UserOutline,
  ContactsOutline,
  IdcardOutline,
  SolutionOutline,
  TeamOutline
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons = [TeamOutline, SolutionOutline, IdcardOutline, ContactsOutline, MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, UserOutline];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
