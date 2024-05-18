import { Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectiveComponent } from './directive/directive.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'form',
    component: FormComponentComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
];
