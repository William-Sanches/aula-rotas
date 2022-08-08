import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';

const routes: Routes = [
  {
    path: "home",
    pathMatch:"full",
    component: HomeComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    children: [ // rotas filhas
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "account/:name",
        component: AccountComponent
      }
    ]
  },
  {
    path: "**",
    component: PageErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
