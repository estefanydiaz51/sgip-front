import { Routes } from '@angular/router';
import { CohortsComponent } from './modules/cohorts/cohorts.component';
import { TeachersComponent } from './modules/teachers/teachers.component';
import { ProgramsComponent } from './modules/programs/programs.component';
import { StudentsComponent } from './modules/students/students.component';
import { HomeComponent } from './modules/home/home.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { CoordinatorsComponent } from './modules/coordinators/coordinators.component';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'cohorts', component: CohortsComponent, canActivate:[AuthGuard] },
  { path: 'teachers', component: TeachersComponent, canActivate:[AuthGuard] },
  { path: 'programs', component: ProgramsComponent, canActivate:[AuthGuard] },
  { path: 'students', component: StudentsComponent, canActivate:[AuthGuard] },
  { path: 'coordinators', component: CoordinatorsComponent, canActivate:[AuthGuard,AdminGuard] },
  { path: '**', redirectTo: 'home' }
];
