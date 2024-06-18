import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { GeneralawarenessComponent } from './pages/generalawareness/generalawareness.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'generalawareness', component: GeneralawarenessComponent,},
  { path: 'calender', component: CalenderComponent,},
  { path: 'signup', component: SignupComponent,}
];
