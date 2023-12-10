import { Routes } from '@angular/router';
import { CohortsComponent } from './modules/cohorts/cohorts.component';
import { TeachersComponent } from './modules/teachers/teachers.component';
import { ProgramsComponent } from './modules/programs/programs.component';
import { StudentsComponent } from './modules/students/students.component';
import { HomeComponent } from './modules/home/home.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cohorts', component: CohortsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'students', component: StudentsComponent },
  { path: '**', redirectTo: 'home' }
];
