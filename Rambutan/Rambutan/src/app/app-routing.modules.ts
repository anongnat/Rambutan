import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './components/pages/pages.component';
import { AuthGuard } from './helpers/canActivateAuthGuard';
import { HeadComponent } from './layout/head.component';
//import { LoginComponent } from './components/login/login.component';
//import { LogoutComponent } from './components/login/logout.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { UsersComponent } from './components/users/users.component';
const routes: Routes = [
  //{ path: '', redirectTo: '/pages', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'pages', component: PagesComponent },
  //{ path: 'logout', component: LogoutComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  //{ path: 'users', component: UsersComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
