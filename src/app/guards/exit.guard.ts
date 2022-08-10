import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<DashboardComponent> {
  canDeactivate(
    component: DashboardComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return window.confirm("Deseja sair da página?");
  }
  
}
